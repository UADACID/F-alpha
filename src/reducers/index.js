import { combineReducers } from 'redux'
import { navReducer } from '../navigations/root'

export const appReducer = combineReducers({
  nav: navReducer,
});


export default appReducer
