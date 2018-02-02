import { combineReducers } from 'redux'
import { navReducer } from './navigator'
import { StartupInfo } from './tabHome'
import { showModalDashboard } from './Home'

export const appReducer = combineReducers({
  nav: navReducer,
  modalDashboard : showModalDashboard,
  StartupInfo
});


export default appReducer
