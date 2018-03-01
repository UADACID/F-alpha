import React from 'react'
import { TabNavigator } from 'react-navigation'
import CustomTab from '../components/CustomTab'
import Categories from '../containers/Categories'
import Settings from '../containers/Settings'
import Notifications from '../containers/Notifications'
import tabHistory from './tabHistory'

const tabBarOptions = {
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
    height:50
  }
}

const tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarComponent: (props) => <CustomTab {...props} />,
  tabBarOptions
}

const tabs = TabNavigator({
  Categories : {
    screen : Categories
  },
  Notifications : {
    screen : Notifications
  },
  Settings : {
    screen : Settings
  },
  Histories : {
    screen : tabHistory
  }
},tabNavigatorConfig)

export default tabs
