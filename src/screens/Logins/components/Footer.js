/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <Animated.View style={[styles.container, this.props.style]}>
        <Text>Don't have account ?
          <Text
            onPress={()=>alert('clicked')}
            style={[{marginLeft:10},this.props.textStyle]}>
             .Register here
          </Text>
        </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    bottom: 0,

    // flex: 1,
  },
});
