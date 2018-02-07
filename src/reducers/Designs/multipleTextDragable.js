import { customMutationState, mutationState } from '../../utils'
console.log({customMutationState, mutationState});

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
  isActive : true
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
    default:
      return state
  }

}

export default multipleTextDragable
