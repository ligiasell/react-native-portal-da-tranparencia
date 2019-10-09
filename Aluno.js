import * as React from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default class AlunoScreen extends React.Component {
  static navigationOptions = {
    title: 'Cadastro de Aluno',
  }

  constructor(props) {
    super(props)
    let aluno = props.navigation.getParam('aluno')

    this.state = {
      matricula: aluno.matricula,
      nome: aluno.nome,
    }
  }

  handleSubmit() {
    const { matricula, nome } = this.state
    fetch('http://3.86.86.36/alunos', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        matricula: matricula,
        nome: nome,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.props.navigation.navigate('Alunos')
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const { navigate } = this.props.navigation
    const { matricula, nome } = this.state
    return (
      <View style={styles.container}>
        <Button title="Voltar" onPress={() => navigate('Alunos')} />
        <Text>Matrícula:</Text>
        <TextInput onChangeText={text => this.setState({ matricula: text })} value={matricula} />
        <Text>Nome:</Text>
        <TextInput onChangeText={text => this.setState({ nome: text })} value={nome} />
        <Button title="Gravar" onPress={() => this.handleSubmit()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
})
