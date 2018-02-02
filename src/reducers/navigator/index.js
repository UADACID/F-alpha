import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../../navigations/root'
import { getCurrentRouteName, getActionRouteName } from '../../utils'

const firstAction = AppNavigator.router.getActionForPathAndParams('Logins');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

export const navReducer = (state = initialNavState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  const { type } = action;
  if (type === NavigationActions.NAVIGATE) {
    // Return current state if no routes have changed
    if (getActionRouteName(action) === getCurrentRouteName(state)) {
        return state;
    }
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
