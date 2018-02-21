/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  View,
  ActivityIndicator,
} from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from './src/store'
const { persistor, store } = configureStore();
import Main from './src'
import Loading from './src/components/Loading'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
      <PersistGate
          loading={<Loading />}
          onBeforeLift={()=> console.log()}
          persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
