import { connect } from 'react-redux'
import Previews from '../../screens/Previews'
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
    addToCart:(payload) => {
      // console.log('asdasdasdasd');
      // console.log(payload);
      dispatch({type:"ADD_ORDER", payload})
    }
  }
}


const mapStateToProps = (state, ownProps) => {

  const { selectedId, models } = state.productModels
  const filterModelName = models.filter(model => model.id == selectedId)
  return {
    nav:state.nav,
    productModels:state.productModels,
    modelName : filterModelName[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Previews)
