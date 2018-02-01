/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import { width, height} from '../../../utils'

const imageResource = require('../../../../assets/Logo.png')

export default class Logo extends Component {
  render() {
    // return (
    //   <Animated.View style={[styles.container, this.props.containerStyle]}>
    //     <Animated.Image
    //       style={[styles.imageLogo, this.props.imageStyle]}
    //       source={imageResource}/>
    //   </Animated.View>
    // );
    return (
      <Animated.View style={[styles.container, this.props.animatedRigthPosition]}>
        <Animated.Image
          style={[styles.imageLogo,this.props.imageStyle]}
          source={imageResource}/>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    position:'absolute',
    // borderWidth: 1,
    right: 0,
    top:10
  },
  imageLogo: {
    height:100,
    width:100,

    // right: (width/2)-50,
    // right:20,
    // top: 20
  }
});
