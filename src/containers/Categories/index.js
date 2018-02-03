import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";

import {services} from '../../api';
import Categories from '../../screens/Categories'


const mapDispatchToProps = (dispatch) => {
  return {
    toScreen: (routeName)=>{
      dispatch(NavigationActions.navigate({ routeName: routeName }))
    },
    allCategories: () => {
      dispatch(services.categories.find());
    },
    closeModal : () => {
      dispatch({type: 'HIDE_MODAL' })
    }
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    nav : state.nav,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
