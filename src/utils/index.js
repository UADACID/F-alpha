import { Dimensions } from 'react-native'
import { getCurrentRouteName, getActionRouteName } from './fixNavigate'

const { height, width } = Dimensions.get('window')
const AppColor = '#f7355d'
// const AppColor = '#cf2b5d'

export {
  height,
  width,
  AppColor,
  getCurrentRouteName,
  getActionRouteName
}
