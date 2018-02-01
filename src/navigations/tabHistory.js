import React from 'react'
import { TabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import CustomTabHistory from '../components/CustomTabHistory'
import Progress from '../containers/Progress'
import Completed from '../containers/Completed'


const tabNavigatorConfig = {
  tabBarPosition: 'top',
  swipeEnabled: false,
  animationEnabled: false,
  tabBarComponent: ({navigation}) => <CustomTabHistory navigation={navigation} />,
  // tabBarOptions
}

const tabHistory = TabNavigator({
  Progress: {
    screen: Progress
  },
  Completed: {
    screen: Completed
  }
},tabNavigatorConfig)

export default tabHistory