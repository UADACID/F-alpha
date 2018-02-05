/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TabMenu from './TabMenu'
import SubTabMenu from './SubTabMenu'
import ContentSubTabMenu from './ContentSubTabMenu'



export default class TabBottom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ContentSubTabMenu />
        <SubTabMenu />
        <TabMenu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection:'row',
  },
});
