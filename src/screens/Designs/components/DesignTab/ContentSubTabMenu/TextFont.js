/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const fonts = ['ABC','DEF','GHI','JKL','MNO','DEF','GHI','JKL','MNO','DEF','GHI','JKL','MNO']

export default class TextFont extends Component {

  renderFontStyle(font, i){
    const fontFamily = font
    return (
      <TouchableOpacity key={i} style={{width:50, height:30, borderRadius:2, margin:1, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
        <Text>{font}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {fonts.map((font,i) => this.renderFontStyle(font,i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
    // flex: 1,
  },
});
