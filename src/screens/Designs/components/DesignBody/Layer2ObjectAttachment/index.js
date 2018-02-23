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
import ImageItem from '../components/ImageItem'

const { width, height } = Dimensions.get('window')
const CENTER_X_POSISITION_TEXT = (width/2)-50
const CENTER_Y_POSISITION_TEXT = (height/3)

const CENTER_X_POSISITION_IMAGE = (width/2)-100
const CENTER_Y_POSISITION_IMAGE = (height/3)



class Layer2ObjectAttachment extends Component {
  render() {
    return (
      <View style={{height, width, position:'absolute'}}>
        {
          this.props.multipleImageDragable.images.map((obj,i) => {
            // console.log('disabled = '+obj.isDeleted);
            // console.log(obj);
            return (
              <View key={i} style={{position:'absolute', left:CENTER_X_POSISITION_IMAGE, top: CENTER_Y_POSISITION_IMAGE}}>
              <NoCustomGestures
                key={i}
                containerStyle={{width:obj.isDeleted ? 0 : width / 2, position:'absolute' ,top:obj.top, left:obj.left, alignItems:'center', transform:[{scale:obj.scale},{rotate:obj.rotate}]}}
                containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? '#ffffff00' : '#ffffff00'}}>
                    <ImageItem url={obj.url} type={obj.type}/>
              </NoCustomGestures>
              </View>
            )
          })
        }
      {
        this.props.multipleTextDragable.texts.map((obj,i) => {
          // console.log('disabled = '+obj.isDeleted);
          // console.log(obj);
          return (
            <View key={i} style={{position:'absolute', left:CENTER_X_POSISITION_TEXT, top: CENTER_Y_POSISITION_TEXT}}>
            <NoCustomGestures
              key={i}
              containerStyle={{width:obj.isDeleted ? 0 : obj.fontLength, position:'absolute' ,top:obj.top, left:obj.left, alignItems:'center', transform:[{scale:obj.scale},{rotate:obj.rotate}]}}
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
    multipleTextDragable : state.multipleTextDragable,
    multipleImageDragable : state.multipleImageDragable
  }
}

export default connect(mapStateToProps)(Layer2ObjectAttachment)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
