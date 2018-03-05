/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ElectronicMonies extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'e-money',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the ElectronicMoney component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
