import React from 'react'
import { TabNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import CustomTabHistory from '../components/CustomTabHistory'
import Progress from '../containers/Progress'
import Completed from '../containers/Completed'

// const Progress = () => (<Text>Progress</Text>)
// const Completed = () => (<Text>Completed</Text>)


const tabNavigatorConfig = {
  tabBarPosition: 'top',
  swipeEnabled: true,
  lazy: true,
  animationEnabled: true,
  tabBarComponent: (props) => <CustomTabHistory  {...props} />,
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
