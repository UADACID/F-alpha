/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class InternetBankings extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'I-banking',
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the InternetBanking component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
