/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Card } from 'native-base'
import FastImage from 'react-native-fast-image'

const colors = [
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#ecf0f1',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#ecf0f1',
]

export default class TabColor extends Component {

  renderColorButton(color, i){
    const backgroundColor = color
    return (
      <TouchableOpacity key={i} style={{borderRadius:2, margin:5}}>
      <Card>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          style={{height:60, width:50}}
          source={{
            uri:"https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/utuh-putih.png?alt=media&token=f9999c48-63f8-4c78-8c25-ef1ab788c95a",
            priority: FastImage.priority.normal,
          }}/>
      </Card>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {colors.map((color,i) => this.renderColorButton(color,i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    padding: 10
    // flexDirection:'row',
  },
});
