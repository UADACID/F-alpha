/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import EmptyHistory from '../../components/EmptyHistory'

export default class Progress extends Component {
  render() {
    return (
      <View style={styles.container}>
        <EmptyHistory />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
