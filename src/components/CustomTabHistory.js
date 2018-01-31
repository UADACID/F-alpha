/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
import { width, height } from '../utils'

export default class CustomTabHistory extends Component {

  handlePressTab = (title) => {
    const setParamsAction = this.props.navigation.setParams({
      params: { activeTabHistory: title },
    })
    this.props.navigation.dispatch(setParamsAction)
    this.props.navigation.navigate(title)
  }

  render() {
    // console.log(this.props);
    const { navigation } = this.props
    let activeTab = navigation.state.params ? navigation.state.params.params.activeTabHistory : 'Progress'
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={()=>this.handlePressTab('Progress')}
            style={[styles.buttonLeft,{backgroundColor:activeTab == 'Progress' ? '#fff' : null}]}>
            <Text style={{color:activeTab == 'Progress' ? '#f7355d' : '#fff'}}>in Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>this.handlePressTab('Completed')}
            style={[styles.buttonRight,{backgroundColor:activeTab == 'Completed' ? '#fff' : null}]}>
            <Text style={{color:activeTab == 'Completed' ? '#f7355d' : '#fff'}}>Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:Platform.OS == 'ios' ? 15 : 0,
    height: Platform.OS == 'ios' ? 60 : 40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f7355d'
    // flex: 1,
  },
  buttonLeft:{
    width:width/4,
    borderWidth:1,
    borderColor: '#fff',
    padding: 2,
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  buttonRight:{
    width:width/4,
    borderWidth:1,
    padding: 2,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#fff',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});
