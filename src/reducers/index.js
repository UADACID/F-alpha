import { combineReducers } from 'redux'
import { navReducer } from './navigator'

export const appReducer = combineReducers({
  nav: navReducer,
});


export default appReducer
