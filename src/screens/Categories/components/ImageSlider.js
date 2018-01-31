/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class ImageSlider extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/categories/Banner.png')}
          style={{width, height:width/2.24}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
