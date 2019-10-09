import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
 
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Sistema de Matrícula',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Alunos"
        onPress={() => navigate('Alunos')}
      />
      <Button
        title="Disciplinas"
        onPress={() => navigate('Disciplinas')}
      />
      </View>
    );
  }
}