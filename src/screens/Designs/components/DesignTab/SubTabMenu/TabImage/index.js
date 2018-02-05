/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TabItem from '../../components/TabItem'
import { width, height } from '../../../../../../utils'
const stringPath = '../../../../../../../assets/'



export default class tabImage extends Component {
  render() {

    const iconPhotoCamera = `${stringPath}/design/photo-camera.png`
    const iconGallery = `${stringPath}/design/gallery.png`

    return (
      <View style={styles.container}>
        <TabItem
          style={styles.tabItemContainer}
          icon={require(`${iconPhotoCamera}`)}/>
        <TabItem
          style={styles.tabItemContainer}
          icon={require(`${iconGallery}`)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  tabItemContainer : {
    width: width/2,
    height: 40,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#f6f6f9'
  }
});
