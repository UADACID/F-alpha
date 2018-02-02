import { connect } from 'react-redux'
import Completed from '../../screens/Completed'
import { NavigationActions } from 'react-navigation'

const mapDispatchToProps = ( dispatch ) => {
  return {
    toScreen: (routeName)=>{
      dispatch(NavigationActions.navigate({ routeName: routeName }))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Completed)
