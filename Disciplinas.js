import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
 
export default class DisciplinasScreen extends React.Component {
  static navigationOptions = {
    title: 'Listagem de Disciplinas',
  };
 
  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }
 
  componentDidMount(){
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      return fetch('http://3.86.86.36/disciplinas')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            disciplinas: responseJson,
          }, function(){
          });
        })
        .catch((error) =>{
          console.error(error);
        });
    });
  }
 
  componentWillUnmount() {
    this.focusListener.remove();
  } 
 
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
 
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.container}>
        <Button
          title="Voltar"
          onPress={() => navigate('Home')}
        />
        <Button
          title="Nova Disciplina"
          onPress={() => navigate('Disciplina', {disciplina: {}})}
        />
              <FlatList
          data={this.state.disciplinas}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigate('Disciplina', {disciplina: item})}>
            <View>
              <Text style={styles.item}>{item.codigo}, {item.nome}</Text>
            </View>
          </TouchableOpacity>}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})