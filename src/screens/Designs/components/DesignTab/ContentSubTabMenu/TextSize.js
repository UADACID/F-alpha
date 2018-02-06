/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class TextSize extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Slider
          style={styles.slider}
          thumbTintColor='#fff'
          minimumTrackTintColor='#fff'
          value={this.props.fontSize}
          minimumValue={10}
          maximumValue={300}
          onValueChange={this.props.onChangeFontSize}/>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeFontSize = (fontSize) => dispatch({type:"ON_CHANGE_FONT_SIZE", payload:fontSize})
  return {
    onChangeFontSize
  }
}

const mapStateToProps = (state) => {
  const {textMenu} = state
  return {
    fontSize:textMenu.fontSize
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextSize)

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#2c2f3470'
  },
  slider : {
    height: 40
  }
});
