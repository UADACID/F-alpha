import { connect } from 'react-redux'
import DetailTransactionHistories from '../../screens/DetailTransactionHistories'
import { NavigationActions } from "react-navigation";


const mapDispatchToProps = ( dispatch ) => {
  return {
    handleBack: (nav)=>{
      if (nav.index === 0) {
        return false;
      }
      dispatch(NavigationActions.back());
      return true;
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTransactionHistories)
