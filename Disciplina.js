import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
 
export default class DisciplinaScreen extends React.Component {
  static navigationOptions = {
    title: 'Cadastro de Disciplina',
  };
 
  constructor(props) {
    super(props);
    let disciplina = props.navigation.getParam('disciplina');
    this.state = {
      codigo: disciplina.codigo,
      nome: disciplina.nome,
      horarios: disciplina.horarios,
    };
  }
 
  handleSubmit() {
    const { codigo, nome, horarios } = this.state;
    fetch('http://3.86.86.36/disciplinas', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        codigo: codigo,
        nome: nome,
        horarios: horarios,
      }),
    })
    .then(response => response.json())
    .then(responseJson => {
        this.props.navigation.navigate('Disciplinas');
      })
      .catch(error => {
        console.error(error);
      });
  }
 
  render() {
    const { navigate } = this.props.navigation;
    const { codigo, nome, horarios} = this.state;
    let horariosArray = []
    for(let i = 0; i < horarios.length; i++){
          horariosArray.push(
            <TextInput
          onChangeText={value => this.setState({ horarios: [...this.state.horarios, value] })}
          value={horarios[i]}
        />
          )
    }
    return (
      <View style={styles.container}>
        <Button title="Voltar" onPress={() => navigate('Disciplinas')} />
        <Text>Código:</Text>
        <TextInput
          onChangeText={text => this.setState({ codigo: text })}
          value={codigo}
        />
        <Text>Nome:</Text>
        <TextInput
          onChangeText={text => this.setState({ nome: text })}
          value={nome}
        />
        <Text>Horário(s):</Text>
        {horariosArray}
        <Button title="Gravar" onPress={() => this.handleSubmit()} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});