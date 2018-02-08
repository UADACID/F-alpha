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

  handleAddText = () => {
    this.props.onShowTextModal()
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          small
          transparent
          onPress={this.handleAddText}
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
  // const addNewText = (text) => dispatch({type:'ADD_NEW_TEXT'})
  const onShowTextModal = () => dispatch({type:'SHOW_TEXT_MODAL'})
  const removeTextSelected = (payload) => {dispatch({type:'REMOVE_TEXT_SELECTED', payload: payload.activeIndex})}
  return {
    // addNewText,
    removeTextSelected,
    onShowTextModal
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
