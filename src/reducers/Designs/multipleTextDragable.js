const defaultText = {
  text : 'YOUR TEXT',
  fontSize : 20,
  fontColor : 'black',
  fontLength : 100,
  top : 0,
  left : 0,
  transform : [],
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
      const changeActiveIndexInsideArray = newTexts.map((obj, i) => {
          if (i != activeIndex) {
            obj= {...obj, isActive : false}
          }else {
            obj= {...obj, isActive : true}
          }
          return obj
        })

      const newState = {
        activeIndex : activeIndex,
        texts : changeActiveIndexInsideArray
      }

      return newState

    }
    break;
    case 'CHANGE_OBJECT_CLICKED':{
      const indexClicked = action.payload
      const changeActiveIndexInsideArray = state.texts.map((obj, i) => {
          if (i != indexClicked) {
            obj= {...obj, isActive : false}
          }else {
            obj= {...obj, isActive : true}
          }
          return obj
        })
      const newState = {
        ...state,
        activeIndex : indexClicked,
        texts : changeActiveIndexInsideArray
      }

      return newState
    }
    break
    default:
      return state
  }

}

export default multipleTextDragable
