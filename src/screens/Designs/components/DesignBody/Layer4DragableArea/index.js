/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import { connect } from 'react-redux'
import CustomGestures from '../components/Gestures'

const { width, height } = Dimensions.get('window')
const CENTER_X_POSISITION_TEXT = (width/2)-50
const CENTER_Y_POSISITION_TEXT = (height/3)


class Layer4DragableArea extends Component {

  onTapContainer = () => {
    this.props.clearAllActiveText()
  }

  onTapText(i){
    this.props.changeObjectClicked(i)
    //handleOpenTabText
    this.props.onChangeTabBottom('text')
  }

  render() {
    return (
      <TouchableNativeFeedback onPress={this.onTapContainer}>
      <View style={{height, width, position:'absolute'}}>
      {
        this.props.multipleTextDragable.texts.map((obj,i) => {
          // console.log(obj);
          return (
            <View key={i} style={{left:CENTER_X_POSISITION_TEXT, top: CENTER_Y_POSISITION_TEXT}}>
            <CustomGestures
              key={i}
              containerStyle={{width:obj.isDeleted ? 0 : obj.fontLength, position:'absolute'}}
              containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? 'red' : '#ffffff00'}}
              onChangeStyle={(event, styles)=> {
                let { left, top } = styles
                this.props.onChangePosition({ left, top, activeIndex:i })
                // this.setState({
                //   styles
                // })
              }}
              onPressIn={()=>{ this.onTapText(i)}}
              onPress={this.props.onShowTextModalEdit}>
                <Text style={{padding:5, fontFamily: obj.fontFamily, fontSize: obj.fontSize, color:obj.fontColor, opacity:0}}>
                  {obj.text}
                </Text>
            </CustomGestures>
            </View>
          )
        })
      }
      </View>
      </TouchableNativeFeedback>
    );
  }
}

const mapDispatchToProps = ( dispatch ) => {
  const onChangePosition = ({left, top, activeIndex}) => dispatch({type:'CHANGE_POSITION', payload:{left, top, activeIndex}})
  const changeObjectClicked = (payload) => dispatch({type:'CHANGE_OBJECT_CLICKED', payload})
  const clearAllActiveText = () => dispatch({type:'CLEAR_ALL_ACTIVE_TEXT'})
  const onChangeTabBottom = (tabName) => dispatch({type:'CHANGE_TAB_BOTTOM_SELECTED', payload:tabName})
  const onShowTextModalEdit = () => dispatch({type:'SHOW_TEXT_MODAL_EDIT'})
  return {
    onChangePosition,
    changeObjectClicked,
    clearAllActiveText,
    onChangeTabBottom,
    onShowTextModalEdit
  }
}

const mapStateToProps = ( state ) => {
  // console.log(state.multipleTextDragable.texts);
  return {
    multipleTextDragable : state.multipleTextDragable
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layer4DragableArea)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
