/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'

class TextLength extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          thumbTintColor='#fff'
          minimumTrackTintColor='#fff'
          value={this.props.fontLength}
          minimumValue={1}
          maximumValue={300}
          onValueChange={this.props.onChangeFontLength}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeFontLength = (fontLength) => dispatch({type:"ON_CHANGE_FONT_LENGTH", payload:fontLength})
  return {
    onChangeFontLength
  }
}

const mapStateToProps = (state) => {
  const {textMenu} = state
  return {
    fontLength:textMenu.fontLength
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextLength)

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#2c2f3470'
  },
  slider : {
    height: 40
  }
});
