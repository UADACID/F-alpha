/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class Layer3HollowImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          style={{ width, height}}
          source={{uri:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/bolong-putih.png?alt=media&token=222f11fe-c1e6-4b86-9762-6d50c666ee5e'}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    position:'absolute',
  },
});
