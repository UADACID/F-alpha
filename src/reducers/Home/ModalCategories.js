let initialState = false

const showModalDashboard = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":{

      return true
    }
    break;
    case "HIDE_MODAL" : {
      return false
    }
    break;
    default:
      return state
  }
}



export default showModalDashboard
