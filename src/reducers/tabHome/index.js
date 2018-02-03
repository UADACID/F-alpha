const initialState = true


export const StartupInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'HIDE_INFO': {
      return false
      }
      break;
  case 'SHOW_INFO': {
    return true
    }
    break;
    default: {
      return state
    }
  }
}
