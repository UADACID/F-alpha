const initialState = {
  fontFamily:null,
  fontColor:null,
  fontSize:null,
  fontLength:null
}

const textMenu = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "ON_CHANGE_FONT_FAMILY":
      return {
        ...state,
        fontFamily : payload
      }
      break;
    case "ON_CHANGE_FONT_COLOR":
      return {
        ...state,
        fontColor : payload
      }
      break;
    case "ON_CHANGE_FONT_SIZE":
      return {
        ...state,
        fontSize : payload
      }
      break;
    case "ON_CHANGE_FONT_LENGTH":
      return {
        ...state,
        fontLength : payload
      }
      break;
    case "ON_CHANGE_CLEAR_FONT":
      return initialState
      break;
    default:
      return state
  }
}

export default textMenu
