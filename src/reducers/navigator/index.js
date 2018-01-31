import { NavigationActions } from 'react-navigation'
import { AppNavigator } from '../../navigations/root'

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

export const navReducer = (state = initialNavState, action) => {
  let nextState;
    switch (action.type) {
      case 'Login':
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
        break;
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
