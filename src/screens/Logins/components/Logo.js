/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { width, height} from '../../../utils'

const imageResource = require('../../../../assets/Logo.png')

export default class Logo extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <Image
          style={[styles.imageLogo, this.props.imageStyle]}
          source={imageResource}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  imageLogo: {
    height:100,
    width:100,
    position:'absolute',
    right: (width/2)-50,
    top: 20
  }
});
