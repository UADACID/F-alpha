const initialState = false

const modalOverlay = (state = initialState, action) => {

  switch (action.type) {
    case "SHOW_OVERLAY":
      return true
      break;
    case "HIDE_OVERLAY":
      return false
      break;
    default:
      return state
  }
}

export default modalOverlay
