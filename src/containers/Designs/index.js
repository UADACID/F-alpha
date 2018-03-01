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
    toScreen: (routeName, params)=>{
      dispatch(NavigationActions.navigate({ routeName: routeName, params }))
    },
    clearBorder : () => {
      dispatch({type:'CLEAR_ALL_ACTIVE_TEXT'})
      dispatch({type:'CLEAR_ALL_ACTIVE_IMAGE'})
    },
    //FOR DEV ONLY
    clearAllMultipleObj : () => {
      dispatch({type:'CLEAR_MULTIPLE_TEXT'})
      dispatch({type:'CLEAR_ALL_IMAGE'})
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  return {
    nav:state.nav,
    refItemDragable: state.refItemDragable
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Designs)
