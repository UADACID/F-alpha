import { connect } from 'react-redux'
import Transactions from '../../screens/Transactions'
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
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    nav:state.nav,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions)
