/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Card } from 'native-base'

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
        <Image
          resizeMode='contain'
          style={{height:60, width:50}}
          source={{uri:"https://image.shutterstock.com/display_pic_with_logo/1110497/709258621/stock-vector-happy-halloween-text-banner-vector-709258621.jpg"}}/>
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
