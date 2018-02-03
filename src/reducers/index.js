import R from 'ramda';
import { combineReducers } from 'redux'
import { navReducer } from './navigator'
import { StartupInfo } from './tabHome'
import { showModalDashboard } from './Home'

import {services} from '../api';

let reducers = R.map(x => x.reducer, services);

export const appReducer = combineReducers({
  ...reducers,
  nav: navReducer,
  modalDashboard : showModalDashboard,
  StartupInfo
});


export default appReducer
