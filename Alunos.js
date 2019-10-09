import * as React from 'react';
import { Text, View, StyleSheet, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

export default class AlunosScreen extends React.Component {
  static navigationOptions = {
    title: 'Listagem de Alunos',
  };

  constructor(props){
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount(){
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      return fetch('http://3.86.86.36/alunos')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            alunos: responseJson,
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
          title="Novo Aluno"
          onPress={() => navigate('Aluno', {aluno: {}})}
        />
        <FlatList
          data={this.state.alunos}
          renderItem={({item}) =>
          <TouchableOpacity onPress={ () => navigate('Aluno', {aluno: item})}>
            <View>
              <Text style={styles.item}>{item.matricula}, {item.nome}</Text>
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





<FlatList
data={this.state.viagens}
renderItem={({ item }) =>
<TouchableOpacity onPress={ () => navigate('Orgao', {orgao: item})}>
  <View>
    <Text style={styles.item}>{item.viagem}</Text>
  </View>
</TouchableOpacity>}
/>


http://www.transparencia.gov.br/api-de-dados/viagens"+
    "?dataIdaDe="+dataDeIdaUrl+"&dataIdaAte="+dataDeIdaUrl+"&dataRetornoDe="+dataDeVoltaUrl+
    "&dataRetornoAte="+dataDeVoltaUrl+"&codigoOrgao="+codigoOrgao
