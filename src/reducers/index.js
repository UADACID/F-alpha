import R from 'ramda';
import { navReducer } from './navigator'
import { StartupInfo } from './tabHome'
import { showModalDashboard } from './Home'

//MODAL OVERLAY
import modalOverlay from './ModalOverlay'

//DESIGNS
import {
  activeTabBottom, activeSubTabButtom,
  textMenu, multipleTextDragable,
  showTextModal, showTextModalEdit,
  multipleImageDragable, productModels,
  modelVariants, refItemDragable} from './Designs'

import { orderReducer } from './Carts'

import { paymentsReducer } from './Payments'

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
  modelVariants,
  refItemDragable,

  modalOverlay,

  orderReducer,

  paymentsReducer
};


export default appReducer
