/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TabItem from '../../components/TabItem'
import { width, height } from '../../../../../../utils'
// const stringPath = '../../../../../../../assets/'



export default class tabText extends Component {
  render() {

    return (
      <View style={styles.container}>
        <TabItem
          style={styles.tabItemContainer}
          title='FONT'
          />
        <TabItem
          style={styles.tabItemContainer}
          title='COLOR'
          />
        <TabItem
          style={styles.tabItemContainer}
          title='SIZE'
          />
        <TabItem
          style={styles.tabItemContainer}
          title='LENGTH'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  tabItemContainer : {
    width: width/4,
    height: 40,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#f6f6f9'
  }
});
