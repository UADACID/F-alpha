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

export default class TextColor extends Component {

  renderColorButton(color, i){
    const backgroundColor = color
    return (
      <TouchableOpacity key={i} style={{backgroundColor, width:15, height:15, borderRadius:10, margin:5}}>

      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Card>
        <ScrollView horizontal={true}>
          {colors.map((color,i) => this.renderColorButton(color,i))}
        </ScrollView>
        </Card>
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
