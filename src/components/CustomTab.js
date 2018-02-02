/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import TabItem from './TabItem'
import { connect } from 'react-redux'
import { Icon } from 'native-base'
// import * as Animatable from 'react-native-animatable';
import { NavigationActions } from 'react-navigation'

import { AppColor } from '../utils'

const { width, height } = Dimensions.get('window')

class CustomTab extends Component {

  componentDidMount(){
    setTimeout(()=>{
      this.props.dispatch({type:'HIDE_INFO'})
    }, 6000);
  }

  componentWillMount(){
    this.animatedValueScaleButton = new Animated.Value(1)
    this.animatedValueRotateButton = new Animated.Value(0)
  }

  handlePressTab = (title) => {
    console.log(this.props);
    const setParamsAction = this.props.navigation.setParams({
      params: { activeTab: title },
    })
    this.props.navigation.dispatch(setParamsAction)
    this.props.dispatch(NavigationActions.navigate({ routeName: title }))
  }

  handlePressInButton = () => {
    this.props.dispatch({type:'HIDE_INFO'})
    Animated.parallel([
      Animated.spring(this.animatedValueScaleButton,{
        toValue: .7
      }),
      Animated.timing(this.animatedValueRotateButton,{
        toValue: 1,
        duration: 100
      })
    ]).start()
  }

  handlePressOutButton = () => {
    Animated.parallel([
      Animated.spring(this.animatedValueScaleButton,{
        toValue: 1,
        friction: 3,
        tension: 40
      }),
      Animated.timing(this.animatedValueRotateButton,{
        toValue: 0,
        duration: 100
      })
    ]).start()
  }

  render() {
    // console.log(this.props.navigation);
    const { navigation } = this.props
    console.log(this.props);
    let activeTab = navigation.state.params ? navigation.state.params.params.activeTab : 'Categories'

    const interpolateRotation = this.animatedValueRotateButton.interpolate({
      inputRange:[0,1],
      outputRange: ['0deg', '45deg']
    })

    const animatedStyleButton = {
      transform :[{scale: this.animatedValueScaleButton},{rotate:interpolateRotation}]
    }

    return (
      <View>
      <View style={styles.container}>
        <View style={{height:50, width, flexDirection:'row', justifyContent:'space-around', alignItems:'center', borderTopWidth: 1, borderColor: '#d1d1d4'}}>
          <View style={{width:width/2, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TabItem
              onPress={()=>this.handlePressTab('Categories')}
              iconName='home'
              label='Home'
              activeTab={activeTab == 'Categories' ? true : false}
            />
            <TabItem
              style={{marginRight:(width/4)/2}}
              onPress={()=>this.handlePressTab('Histories')}
              iconName='ios-repeat-outline'
              label='Histories'
              activeTab={activeTab == 'Histories' ? true : false}
            />
          </View>
          <View style={{width:width/2, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
            <TabItem
              style={{marginLeft:(width/4)/2}}
              onPress={()=>this.handlePressTab('Notifications')}
              iconName='ios-notifications-outline'
              label='Notifications'
              activeTab={activeTab == 'Notifications' ? true : false}
            />
            <TabItem
              onPress={()=>this.handlePressTab('Settings')}
              iconName='ios-cog'
              label='Settings'
              activeTab={activeTab == 'Settings' ? true : false}
            />
          </View>
        </View>
      </View>
      <TouchableWithoutFeedback
      onPress={()=>this.props.dispatch({type: 'SHOW_MODAL' })}
      onPressIn={this.handlePressInButton}
      onPressOut={this.handlePressOutButton}>
      <Animated.View
        activeOpacity={0.95}
        style={[{backgroundColor:AppColor,position:'absolute', height:60, width:60, alignItems:'center',  justifyContent:'center', borderWidth:0, borderRadius:30, bottom:10, left:(width/2)-30},animatedStyleButton]}>
        <Icon name='add' style={{color:'#ffffff'}}/>
      </Animated.View>
      </TouchableWithoutFeedback>
      {this.props.StartupInfo ?
        <Animatable.View animation="pulse" easing="ease-in-out-sine" iterationCount="infinite" style={{position:'absolute', bottom:80,width, alignItems:'center'}}>
          <View style={{backgroundColor:'#ff6c8b', padding:10, borderRadius:20, borderWidth:1, borderColor:AppColor}}>
          <Text style={{color:'#fff'}}>Create Your Own Design Here</Text>
          </View>
          <View style={[styles.triangle, {borderTopColor:AppColor}]} />
        </Animatable.View> : false
      }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    StartupInfo : state.StartupInfo
  }
}

export default connect(mapStateToProps)(CustomTab)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    // height: 50,
    width,
    justifyContent:'flex-end',
    // borderWidth: 1
  },
  triangle:{
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#000'
  }
});
