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

class DesignBody extends Component {

  state = {
    styles : '',
    selected : false
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
        <CustomGestures
          scalable={true}
          containerStyle={{left:ITEM_DRAGABLE_POSITION, width:100, position:'absolute'}}
          containerChildStyle={{borderWidth:1, borderColor:this.state.selected ? 'red' : '#00000000'}}
          onChangeStyle={(event, styles)=> {this.setState({
            styles
          })}}
          onPresItem={()=> { this.setState({selected: !this.state.selected})}}>
          <Image
            resizeMode='contain'
            style={{height:100, width:100}}
            source={{uri:'https://static.wixstatic.com/media/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png/v1/crop/x_0,y_0,w_1433,h_1418/fill/w_334,h_332,al_c,usm_0.66_1.00_0.01/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png'}}/>
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
        </CustomGestures>
  {/*      <View style={{width:100}}>
          <Gestures
            onChange={(event, styles) => {
              console.log(styles);
              this.setState({
                styles
              })
          }}>
            <TouchableOpacity>
            <View style={{borderWidth:2, borderColor:'red'}}>
            <Image
              resizeMode='contain'
              style={{height:100, width:100}}
              source={{uri:'https://static.wixstatic.com/media/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png/v1/crop/x_0,y_0,w_1433,h_1418/fill/w_334,h_332,al_c,usm_0.66_1.00_0.01/6a4004_569d1c0eb4bf456eb260332f3d01e6a0~mv2_d_1433_2071_s_2.png'}}/>
            </View>
            </TouchableOpacity>
          </Gestures>
        </View>*/}
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
