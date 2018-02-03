import { connect } from 'react-redux'
import {services} from '../../api';
import Models from '../../screens/Models'
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
    allModels: () => {
      dispatch(services.models.find());
    },
    toScreen: (routeName)=>{
      dispatch(NavigationActions.navigate({ routeName: routeName }))
    }
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Models)
