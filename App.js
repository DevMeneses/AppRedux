// Desabilitar Warning
console.disableYellowBox=true;

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore } from 'react-redux';

import Home from './src/Home';
import Login from './src/Login';
import Cadastro from './src/Cadastro'; 
import Reducers from './src/Reducers';

let store = createStore(Reducers);

const Navegador = createStackNavigator({
  Home:{
    screen: Home
  },
  Cadastro:{
    screen: Cadastro
  },
  Login:{
    screen: Login
  }
});

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
          <Navegador/>
      </Provider>
    );
  }
}
