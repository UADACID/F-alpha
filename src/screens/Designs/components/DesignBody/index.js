/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Button } from 'native-base'
import { connect } from 'react-redux'
// import Gestures from 'react-native-easy-gestures';
import CustomGestures from './Gestures'

const { width, height } = Dimensions.get('window')

const ITEM_DRAGABLE_POSITION = (width / 2) - 50

const textsDragable = [
  {
    text : 'Pratama',
    fontSize : 20,
    fontColor : 'black',
    fontLength : 100,
    top : 0,
    left : 0,
    transform : []
  },
  {
    text : 'Setya',
    fontSize : 20,
    fontColor : 'black',
    fontLength : 100,
    top : 0,
    left : 0,
    transform : []
  },
]

class DesignBody extends Component {

  state = {
    styles : '',
    selected : false
  }

  render() {
    console.log(this.props.textMenu);
    const { textMenu, multipleTextDragable } = this.props
    const { fontFamily, fontColor, fontSize, fontLength} = textMenu
    return (
      <View style={styles.container}>
        <Text style={{padding:5}}>{textMenu.fontFamily}</Text>
        <Text style={{padding:5}}>{textMenu.fontColor}</Text>
        <Text style={{padding:5}}>{textMenu.fontSize}</Text>
        <Text style={{padding:5}}>{textMenu.fontLength}</Text>
        <Text style={{padding:5}}>{multipleTextDragable.activeIndex}</Text>

        <Button onPress={()=>this.props.dispatch({type:'ADD_NEW_TEXT'})}>
          <Text style={{borderWidth:1}}>asdasd</Text>
        </Button>
        <Text style={{padding:5}}>{JSON.stringify(this.state.styles)}</Text>
        <CustomGestures
          scalable={true}
          containerStyle={{left:ITEM_DRAGABLE_POSITION, width:100, position:'absolute'}}
          containerChildStyle={{borderWidth:1, borderColor:this.state.selected ? 'red' : '#00000000'}}
          onChangeStyle={(event, styles)=> {this.setState({
            styles
          })}}
          onPresIn={()=> { this.setState({selected: !this.state.selected})}}>
          <Image
            resizeMode='contain'
            style={{height:100, width:100}}
            source={{uri:'https://static.wixstatic.com/media/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png/v1/crop/x_0,y_0,w_1433,h_1418/fill/w_334,h_332,al_c,usm_0.66_1.00_0.01/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png'}}/>
        </CustomGestures>
        {
          multipleTextDragable.texts.map((obj,i) => {
            return (
              <CustomGestures
                key={i}
                containerStyle={{width:fontLength, position:'absolute'}}
                containerChildStyle={{borderWidth:2, borderColor:obj.isActive ? 'red' : '#ffffff00'}}
                onChangeStyle={(event, styles)=> {
                  this.setState({
                  styles
                })}}
                onPressIn={()=>{ this.props.dispatch({type:'CHANGE_OBJECT_CLICKED', payload:i})}}
                onPress={()=> {alert('aaaa')}}>
                  <Text style={{padding:5, fontFamily, fontSize, color:fontColor}}>
                    {obj.text}
                  </Text>
              </CustomGestures>
            )
          })
        }
        {/*<CustomGestures
          containerStyle={{width:fontLength, position:'absolute'}}
          containerChildStyle={{borderWidth:2, borderColor:'red'}}
          onChangeStyle={(event, styles)=> {this.setState({
            styles
          })}}
          onPresItem={()=> {}}>
            <Text style={{padding:5, fontFamily, fontSize, color:fontColor}}>
              Fifilio
            </Text>
        </CustomGestures>
        <CustomGestures
          containerStyle={{width:fontLength, position:'absolute'}}
          containerChildStyle={{borderWidth:2, borderColor:'red'}}
          onChangeStyle={(event, styles)=> {this.setState({
            styles
          })}}
          onPresItem={()=> {}}>
            <Text style={{padding:5, fontFamily, fontSize, color:fontColor}}>
              Fifilio
            </Text>
        </CustomGestures>*/}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { textMenu, multipleTextDragable } = state
  return {
    textMenu,
    multipleTextDragable
  }
}

export default connect(mapStateToProps)(DesignBody)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
