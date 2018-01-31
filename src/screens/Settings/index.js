/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Setting component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
});