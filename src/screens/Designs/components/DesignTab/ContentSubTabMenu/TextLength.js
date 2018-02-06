/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';

export default class TextLength extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          thumbTintColor='#fff'
          minimumTrackTintColor='#fff'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#2c2f3470'
  },
  slider : {
    height: 40
  }
});
