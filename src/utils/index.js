import { Dimensions } from 'react-native'
import { getCurrentRouteName, getActionRouteName } from './fixNavigate'

const { height, width } = Dimensions.get('window')
const AppColor = '#f7355d'

export {
  height,
  width,
  AppColor,
  getCurrentRouteName,
  getActionRouteName
}
