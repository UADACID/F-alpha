import { Dimensions } from 'react-native'
import { customMutationState, mutationState } from '../../utils'
// console.log({customMutationState, mutationState});
const { width, height } = Dimensions.get('window')
const CENTER_X_POSISITION_TEXT = (width/2)-50
const CENTER_Y_POSISITION_TEXT = (height/3)

const defaultText = {
  text : 'YOUR TEXT',
  fontFamily : 'Jura-Reguler',
  fontSize : 20,
  fontColor : '#34495e',
  fontLength : 100,
  top : 0,
  left : 0,
  rotate : '0deg',
  scale: 1,
  isActive : true,
  isDeleted : false
}

const initialState = {
  activeIndex : 0,
  texts : []
}

const multipleTextDragable = ( state = initialState, action ) => {
  const { type } = action
  switch (type) {
    case 'ADD_NEW_TEXT': {
      const newTexts = state.texts.concat([defaultText])
      const activeIndex = newTexts.length - 1
      const newState = mutationState({texts:newTexts, activeIndex})

      return newState
    }
    break;
    case 'CHANGE_OBJECT_CLICKED':{
      const indexClicked = action.payload
      const newState = mutationState({texts:state.texts, activeIndex : indexClicked})

      return newState
    }
    break
    case 'CHANGE_FONT_STYLE':{
      const { fontFamily, indexClicked } = action.payload
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontFamily',
        value:fontFamily
      })
      return newState
    }
    break
    case 'CHANGE_FONT_COLOR':{
      const { fontColor, indexClicked } = action.payload
      console.log({ fontColor, indexClicked });
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontColor',
        value:fontColor
      })
      return newState
    }
    break
    case 'CHANGE_FONT_SIZE':{
      const { fontSize, indexClicked } = action.payload
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontSize',
        value:fontSize
      })
      return newState
    }
    break
    case 'CHANGE_FONT_LENGTH':{
      const { fontLength, indexClicked } = action.payload
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontLength',
        value:fontLength
      })
      return newState
    }
    break
    case 'CHANGE_POSITION':{
      const { left, top, activeIndex } = action.payload
      const {texts} = state

      const newArray = texts.map((obj, i) => {
        if (i == activeIndex) {
          obj = {...obj, left, top}
        }else{
          obj = {...obj}
        }

        return obj
      })

      const newState = {
        activeIndex,
        texts:newArray
      }

      return newState
    }
    break
    case 'REMOVE_TEXT_SELECTED':{
      const indexClicked = action.payload
      console.log(indexClicked);
      let newTexts = state.texts
      newTexts[indexClicked].isDeleted = true
      newTexts[0].isActive = true
      const newState = {
        ...state,
        activeIndex:0,
        texts : newTexts
      }
      return newState
    }
    break
    default:
      return state
  }

}

export default multipleTextDragable
