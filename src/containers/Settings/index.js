import { connect } from 'react-redux'
import Settings from '../../screens/Settings'
import { NavigationActions } from 'react-navigation'

const mapDispatchToProps = ( dispatch ) => {
  return {
    toLoginScreen: (routeName)=>{
      dispatch(NavigationActions.navigate({ routeName: routeName }))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings)
