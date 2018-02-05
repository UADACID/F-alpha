/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';

export default class TextSize extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider style={styles.slider} thumbTintColor='#fa2b6f'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  slider : {
    height: 40
  }
});
