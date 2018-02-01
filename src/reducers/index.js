import { combineReducers } from 'redux'
import { navReducer } from './navigator'
import { StartupInfo } from './tabHome'

export const appReducer = combineReducers({
  nav: navReducer,
  StartupInfo : StartupInfo
});


export default appReducer
