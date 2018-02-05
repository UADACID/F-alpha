/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

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
]

export default class TabColor extends Component {

  renderColorButton(color, i){
    const backgroundColor = color
    return (
      <TouchableOpacity key={i} style={{backgroundColor, width:25, height:25, borderRadius:13, margin:8}}>

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
    padding: 20
    // flexDirection:'row',
  },
});
