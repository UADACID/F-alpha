/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class DetailOrderHistories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the DetailOrderHistories component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
