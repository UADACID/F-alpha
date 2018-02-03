/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Header, Segment, Button, Body, Left, Right, Icon } from 'native-base'
import { width, height, AppColor } from '../utils'

class CustomTabHistory extends Component {

  handlePressTab = (title) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: title }))
  }

  getActiveTabName = (index) => {
    switch (index) {
      case 0:
        return 'Progress'
        break;
      case 1:
        return 'Completed'
        break;
      default:

    }
  }

  render() {
    // console.log(this.props);
    const { navigationState } = this.props
    let activeTab = this.getActiveTabName(navigationState.index)
    // let activeTab = navigation.state.params ? navigation.state.params.params.activeTabHistory : 'Progress'
    return (
      <View style={styles.container}>
        <Header style={[{backgroundColor:AppColor}]} androidStatusBarColor={AppColor}>
          <Left>
          </Left>
          <Body>
            <View style={{flexDirection:'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>this.handlePressTab('Progress')}
                style={[styles.buttonLeft,{backgroundColor:activeTab == 'Progress' ? '#fff' : null}]}>
                <Text style={{color:activeTab == 'Progress' ? AppColor : '#fff'}}>in Progress</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>this.handlePressTab('Completed')}
                style={[styles.buttonRight,{backgroundColor:activeTab == 'Completed' ? '#fff' : null}]}>
                <Text style={{color:activeTab == 'Completed' ? AppColor : '#fff'}}>Completed</Text>
              </TouchableOpacity>
            </View>
          </Body>
          <Right>
          </Right>
        </Header>
        {/*<View style={{flexDirection:'row'}}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>this.handlePressTab('Progress')}
            style={[styles.buttonLeft,{backgroundColor:activeTab == 'Progress' ? '#fff' : null}]}>
            <Text style={{color:activeTab == 'Progress' ? AppColor : '#fff'}}>in Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>this.handlePressTab('Completed')}
            style={[styles.buttonRight,{backgroundColor:activeTab == 'Completed' ? '#fff' : null}]}>
            <Text style={{color:activeTab == 'Completed' ? AppColor : '#fff'}}>Completed</Text>
          </TouchableOpacity>
        </View>*/}
      </View>
    );
  }
}

export default connect()(CustomTabHistory)

const styles = StyleSheet.create({
  container: {
    // paddingTop:Platform.OS == 'ios' ? 15 : 0,
    // height: Platform.OS == 'ios' ? 60 : 40,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: AppColor
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
