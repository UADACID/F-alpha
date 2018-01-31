/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { height, width } from '../../../utils'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode={this.props.resizeMode ? this.props.resizeMode : 'contain'}
          style={[{height: 100, width: 100, marginLeft:25, marginTop:25, marginBottom:25},this.props.imageHeaderStyle]}
          source={{uri:'https://wordsandvideos.com/wp-content/uploads/2016/12/common.png'}}
        />
        <View style={{height:50, width, backgroundColor:'#e9e9ef'}}/>
        <Image
          resizeMode={this.props.resizeMode ? this.props.resizeMode : 'contain'}
          style={[{position:'absolute', height: 50, width: 50, bottom:0, right:25}]}
          source={{uri:'https://lafoliesewingbooth.files.wordpress.com/2014/05/instagram.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    width: width,
    backgroundColor: '#fff',
  },
});
