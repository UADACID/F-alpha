import R from 'ramda';
import { navReducer } from './navigator'
import { StartupInfo } from './tabHome'
import { showModalDashboard } from './Home'

//DESIGNS
import {
  activeTabBottom, activeSubTabButtom,
  textMenu, multipleTextDragable,
  showTextModal, showTextModalEdit,
  multipleImageDragable, productModels,
  modelVariants} from './Designs'

import {services} from '../api';

let reducers = R.map(x => x.reducer, services);

export const appReducer = {
  ...reducers,
  nav: navReducer,
  modalDashboard : showModalDashboard,
  StartupInfo,
  activeTabBottom,
  activeSubTabButtom,
  textMenu,
  multipleTextDragable,
  showTextModal,
  showTextModalEdit,
  multipleImageDragable,
  productModels,
  modelVariants
};


export default appReducer
