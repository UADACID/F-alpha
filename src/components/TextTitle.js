/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TextTitle extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.leftComponent}
        {this.props.rightComponent}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
});
