/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import NoCustomGestures from '../components/NoGestures'

const { width, height } = Dimensions.get('window')
const CENTER_X_POSISITION_TEXT = (width/2)-50
const CENTER_Y_POSISITION_TEXT = (height/3)

class Layer2ObjectAttachment extends Component {
  render() {
    return (
      <View style={{height, width, position:'absolute'}}>
      {
        this.props.multipleTextDragable.texts.map((obj,i) => {
          // console.log('disabled = '+obj.isDeleted);
          return (
            <View key={i} style={{left:CENTER_X_POSISITION_TEXT, top: CENTER_Y_POSISITION_TEXT}}>
            <NoCustomGestures
              key={i}
              containerStyle={{width:obj.isDeleted ? 0 : obj.fontLength, position:'absolute' ,top:obj.top, left:obj.left}}
              containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? '#ffffff00' : '#ffffff00'}}>
                <Text style={{padding:5, fontFamily: obj.fontFamily, fontSize: obj.fontSize, color:obj.fontColor}}>
                  {obj.text}
                </Text>
            </NoCustomGestures>
            </View>
          )
        })
      }
      </View>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    multipleTextDragable : state.multipleTextDragable
  }
}

export default connect(mapStateToProps)(Layer2ObjectAttachment)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
