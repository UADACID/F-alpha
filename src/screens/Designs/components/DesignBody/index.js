/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'

class DesignBody extends Component {
  render() {
    console.log(this.props.textMenu);
    const { textMenu } = this.props
    const { fontFamily, fontColor, fontSize, fontLength} = textMenu
    return (
      <View style={styles.container}>
        <Text style={{padding:5}}>{textMenu.fontFamily}</Text>
        <Text style={{padding:5}}>{textMenu.fontColor}</Text>
        <Text style={{padding:5}}>{textMenu.fontSize}</Text>
        <Text style={{padding:5}}>{textMenu.fontLength}</Text>
        <View style={{width: fontLength}}>
          <Text style={{padding:5, fontFamily, fontSize, color:fontColor}}>
            Fifilio
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { textMenu } = state
  return {
    textMenu
  }
}

export default connect(mapStateToProps)(DesignBody)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
