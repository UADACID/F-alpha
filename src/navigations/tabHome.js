import React from 'react'
import { TabNavigator } from 'react-navigation'
import CustomTab from '../components/CustomTab'
import Category from '../containers/category'
import Setting from '../containers/setting'
import Notification from '../containers/notification'
import History from '../containers/history'

const tabs = TabNavigator({
  Category : {
    screen : Category
  },
  Notification : {
    screen : Notification
  },
  Setting : {
    screen : Setting
  },
  History : {
    screen : History
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarComponent: ({navigation}) => <CustomTab navigation={navigation} />,
  tabBarOptions : {
    showIcon: true,
    activeTintColor: '#f7355d',
    inactiveTintColor: 'gray',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#ffffff',
    },
    tabStyle:{
      // position:'absolute',
      // bottom:0,
      height:50
    }
  }
})

export default tabs
