import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import Payments from '../../screens/Payments'

const mapDispatchToProps = dispatch => ({
  toScreen: ({routeName, params})=>{
    // console.log({routeName, params});
    dispatch(NavigationActions.navigate({ routeName: routeName, params}))
  },
})

export default connect(null, mapDispatchToProps)(Payments)
