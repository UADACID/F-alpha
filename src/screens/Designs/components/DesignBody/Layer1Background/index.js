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

export default class Layer1Background extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          style={{ width, height}}
          source={{uri:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/utuh-putih.png?alt=media&token=f9999c48-63f8-4c78-8c25-ef1ab788c95a'}}
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
