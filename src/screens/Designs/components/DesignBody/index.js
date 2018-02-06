/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Button } from 'native-base'
import { connect } from 'react-redux'
import Gestures from 'react-native-easy-gestures';

class DesignBody extends Component {

  state = {
    styles : ''
  }

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
        <Text style={{borderWidth:1}}>asdasd</Text>
        <Text style={{padding:5}}>{JSON.stringify(this.state.styles)}</Text>
        <Gestures
          styles={{width:fontLength}}
          scalable={false}
          onChange={(event, styles) => {
            console.log(styles);
            this.setState({
              styles
            })
        }}>
        <View style={{width:fontLength, borderWidth:2, borderColor:'red'}}>
          <Text style={{padding:5, fontFamily, fontSize, color:fontColor}}>
            Fifilio
          </Text>
        </View>
        </Gestures>
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
