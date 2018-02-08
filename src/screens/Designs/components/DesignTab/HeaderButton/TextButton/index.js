/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Button, Icon } from 'native-base'

class TextButton extends Component {

  handleRemoveTextSelected = () => {
    const { removeTextSelected, activeIndex, textsLength, multipleTextDragable } = this.props
    // console.log({ removeTextSelected, activeIndex, textsLength });
    if (textsLength != 0) {
      removeTextSelected({activeIndex, multipleTextDragable})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          small
          transparent
          onPress={this.props.addNewText}
          style={styles.buttonAdd}>
          <Icon name='md-add' style={{color:'#fff'}}/>
        </Button>
        <Button
          small
          transparent
          onPress={this.handleRemoveTextSelected}
          style={styles.buttonRemove}>
          <Icon name='ios-trash-outline' style={{color:'#fff'}}/>
        </Button>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch
) => {
  const addNewText = () => dispatch({type:'ADD_NEW_TEXT'})
  const removeTextSelected = (payload) => {


    dispatch({type:'REMOVE_TEXT_SELECTED', payload: payload.activeIndex})
    // setTimeout( () => {
    //   const { texts } = payload.multipleTextDragable
    //   // console.log(texts.length);
    //   for (var i = 0; i < texts.length; i++) {
    //     const text = texts[i]
    //     console.log(text);
    //     dispatch({type:'CHANGE_POSITION', payload:{left:text.left, top:text.top, activeIndex:text.activeIndex}})
    //   }
    // }, 2000);

  }
  return {
    addNewText,
    removeTextSelected
  }
}

const mapStateToProps = ( state ) => {
  const { multipleTextDragable } = state
  // console.log(multipleTextDragable);
  const textsLength = multipleTextDragable.texts.length

  return {
    activeIndex : multipleTextDragable.activeIndex,
    multipleTextDragable,
    textsLength
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextButton)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'flex-end',
    padding: 5
  },
  buttonAdd : {
    marginRight: 20,
    backgroundColor: '#4ecdc4a3'
  },
  buttonRemove : {
    backgroundColor: '#f443368f'
  }
});
