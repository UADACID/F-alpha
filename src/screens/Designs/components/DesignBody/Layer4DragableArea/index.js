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

  convertToObj = (item) => {

    return JSON.parse(JSON.stringify(item))
  }

  onTransformAdapter(array){
    let newArray = []
    array.map(obj => {
      for (var variable in obj) {
          console.log(variable);
          let key = variable
          let value = obj[variable]
          newArray.push({key, value})
      }
    })
    return newArray
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
                  let { left, top, transform } = styles
                  let trans1 = this.convertToObj(transform['1'])
                  let trans2 = this.convertToObj(transform['0'])
                  let array = [trans1,trans2]

                  let transformResult = this.onTransformAdapter(array);
                  let rotate = transformResult.filter((obj => obj.key == 'rotate'))
                  let scale = transformResult.filter((obj => obj.key == 'scale'))
                  // console.log({ left, top, rotate:rotate[0].value, scale:scale[0].value, activeIndex:i });
                  this.props.onChangePosition({ left, top, rotate:rotate[0].value, scale:scale[0].value, activeIndex:i })
                }}
                onPressIn={()=>{ this.onTapText(i)}}
                onLongPress={this.props.onShowTextModalEdit}
                >
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
  const onChangePosition = ({left, top,rotate, scale, activeIndex}) => dispatch({type:'CHANGE_POSITION', payload:{left, top, rotate, scale, activeIndex}})
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
