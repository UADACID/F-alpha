import { connect } from 'react-redux'
import Designs from '../../screens/Designs'
import { NavigationActions } from "react-navigation";


const mapDispatchToProps = ( dispatch ) => {
  return {
    handleBack: (nav)=>{
      if (nav.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    },
    toScreen: (routeName)=>{
      dispatch(NavigationActions.navigate({ routeName: routeName }))
    },
    //FOR DEV ONLY
    clearAllMultipleObj : () => {
      dispatch({type:'CLEAR_MULTIPLE_TEXT'})
      dispatch({type:'CLEAR_ALL_IMAGE'})
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Designs)
