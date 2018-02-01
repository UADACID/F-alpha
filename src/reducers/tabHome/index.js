const initialState = true


export const StartupInfo = (state = initialState, action) => {
  switch (action.type) {
    case 'HIDE_INFO': {
      return false
      }
      break;
    default: {
      return state
    }
  }
}
