/* @flow weak */

import React from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import { height, width } from '../utils'

const EmptyHistory = ({props}) => (
  <View style={styles.container}>
    <Image
      resizeMode='cover'
      style={{height, width}}
      source={require('../../assets/bg_history.png')}
    />
  </View>
);

export default EmptyHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
