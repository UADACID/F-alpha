/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { AppColor } from './utils'
import AppNavigator  from './navigations'

class Main extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar
          backgroundColor={AppColor}
          barStyle="light-content"
        />
        <AppNavigator />
      </View>
    );
  }
}


export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
