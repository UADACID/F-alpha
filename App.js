/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppNavigator  from './src/navigations/root'

import { appReducer } from './src/reducers'

const store = createStore(appReducer)

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
