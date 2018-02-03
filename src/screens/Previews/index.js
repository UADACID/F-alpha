/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Previews extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.props.toScreen('Carts')}>I'm the Previews component</Text>
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
