import { connect } from 'react-redux'
import Logins from '../../screens/Logins'
import { NavigationActions } from "react-navigation";





const mapStateToProps = (state, ownProps) => {
  return {
    nav:state.nav
  }
}

export default connect(mapStateToProps)(Logins)
