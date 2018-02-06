/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';
import { connect } from 'react-redux'

const fonts = [
  'After_Shok',
  'Akashi',
  'Amadeus',
  'Jura-Reguler',
  'Sofia-Reguler',
  'uni0553-webfont',
  'HBM Razed Bold (personal use only)',
  'HBM Razed Galerie (personal use only)',
  'HBM Razed Light (personal use only)',
  'HBM Razed Trend (personal use only)',
  'PlayfairDisplay',
  'PlayfairDisplay-Black',
  'PlayfairDisplaySC',
  'Exo-Medium',
  'Exo-Light',
  'Ubuntu-B',
  'Ubuntu-C',
  'Ubuntu-R',
  'Geo',
  'Geo_Oblique',
  'April Flowers - OTF',
  'April Flowers - TTF',
  'Sunny Spring Day - OTF',
  'Sunny Spring Day - TTF',
];

class TextFont extends Component {

  renderFontStyle(font, i){
    const fontFamily = font
    return (
      <TouchableOpacity
        key={i}
        onPress={()=>this.props.onChangeFontFamily(font)} 
        style={styles.textContainer}>
        <Text style={[{color:'#fff', fontSize:20},Platform.OS == 'ios' ? {} : { fontFamily:font}]}>ABC</Text>
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

const mapDispatchToProps = (dispatch) => {
  const onChangeFontFamily = (fontFamily) => dispatch({type:"ON_CHANGE_FONT_FAMILY", payload:fontFamily})
  return {
    onChangeFontFamily
  }
}

export default connect(null, mapDispatchToProps)(TextFont)
const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#2c2f3470'
    // flex: 1,
  },
  textContainer:{
    padding:4,
    borderRadius:2,
    margin:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
