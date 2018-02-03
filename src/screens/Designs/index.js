/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Designs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.props.toScreen('Previews')}>I'm the Designs component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});
