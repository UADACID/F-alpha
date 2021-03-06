import React from 'react'
import { Text, Easing, Animated } from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import TabHomeScreen from './tabHome'
import Logins from '../containers/Logins'
import Registers from '../containers/Registers'
import Profiles from '../containers/Profiles'
import EditProfiles from '../containers/EditProfiles'
import DetailTransactionHistories from '../containers/DetailTransactionHistories'
import Models from '../containers/Models'
import Carts from '../containers/Carts'
import Designs from '../containers/Designs'
import Previews from '../containers/Previews'
import Transactions from '../containers/Transactions'
import Payments from '../containers/Payments'
import PaymentDetails from '../containers/PaymentDetails'

//under development
// import PaymentsStackNavigator from './tabPayment'
import { transitionConfig } from '../utils'


// console.log(transitionConfig());
const transition = transitionConfig()
const navigationOptions = {
  headerMode:'float',
  initialRouteName:'Payments',
  navigationOptions : {
    headerStyle: {
      backgroundColor: '#f7355d'
    },
    headerTitleStyle: {
      color:'#ffffff',
      fontWeight:'100'
    },
    headerTintColor:'#ffffff'
  },
  transitionConfig: () => (transition)
}

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
  },
  Designs: {
    screen : Designs
  },
  Previews : {
    screen : Previews
  },
  Carts : {
    screen : Carts
  },
  Transactions : {
    screen : Transactions
  },
  PaymentDetails : {
    screen : PaymentDetails
  },
  Payments: {
    screen : Payments,
    navigationOptions: {
      title:'Select Payments',
    }
  },
},navigationOptions)

createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })} />
)

const mapStateToProps = state => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(AppWithNavigationState)
