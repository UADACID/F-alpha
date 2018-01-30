import React from 'react'
import { Text } from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import TabHomeScreen from './tabHome'
import Logins from '../containers/Logins'


const AppNavigator = StackNavigator({
  Home : {
    screen : TabHomeScreen
  },
  Logins : {
    screen : Logins
  },
},{
  headerMode:'float'
})

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

export const navReducer = (state = initialNavState, action) => {
  let nextState;
    switch (action.type) {
      // case 'Login':
      //   nextState = AppNavigator.router.getStateForAction(
      //     NavigationActions.back(),
      //     state
      //   );
      //   break;
      // case 'Logout':
      //   nextState = AppNavigator.router.getStateForAction(
      //     NavigationActions.navigate({ routeName: 'Login' }),
      //     state
      //   );
      //   break;
      default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = state => ({
  nav: state.nav
})


export default connect(mapStateToProps)(AppWithNavigationState)
