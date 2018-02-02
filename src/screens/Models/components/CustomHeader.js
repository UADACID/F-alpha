/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

const { width, height} = Dimensions.get('window')

export default class CustomHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width, height:width/4}}
          source={{uri:'http://justtshirts.com.au/wp-content/uploads/2013/08/t-shirthub-banner.jpg'}}
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
