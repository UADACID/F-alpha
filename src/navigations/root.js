import React from 'react'
import { Text } from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import TabHomeScreen from './tabHome'
import Logins from '../containers/Logins'
import Registers from '../containers/Registers'
import Profiles from '../containers/Profiles'
import EditProfiles from '../containers/EditProfiles'
import DetailTransactionHistories from '../containers/DetailTransactionHistories'
import Models from '../containers/Models'


export const AppNavigator = StackNavigator({
  Home : {
    screen : TabHomeScreen,
  },
  Logins : {
    screen : Logins
  },
  Registers : {
    screen : Registers
  },
  Profiles :{
    screen : Profiles
  },
  EditProfiles: {
    screen : EditProfiles
  },
  DetailTransactionHistories : {
    screen : DetailTransactionHistories
  },
  Models : {
    screen : Models
  }
},{
  headerMode:'none',
  // initialRouteName:'Logins'
})


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(AppWithNavigationState)
