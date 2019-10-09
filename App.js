import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './Home'
import AlunosScreen from './Alunos'
import AlunoScreen from './Aluno'
import DisciplinasScreen from './Disciplinas'
import DisciplinaScreen from './Disciplina'
 
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Alunos: {screen: AlunosScreen},
  Aluno: {screen: AlunoScreen},
  Disciplinas: {screen: DisciplinasScreen},
  Disciplina: {screen: DisciplinaScreen},
});
 
const App = createAppContainer(MainNavigator);
export default App;