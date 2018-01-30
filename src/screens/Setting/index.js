/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Setting extends Component {
  static navigationOptions = {
    title: 'Setting',
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
