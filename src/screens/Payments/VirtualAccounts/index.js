/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class VirtualAccounts extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'v-account',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the VirtualAccounts component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
