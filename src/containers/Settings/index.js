import { connect } from 'react-redux'
import Settings from '../../screens/Settings'

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  }
}

export default connect(mapStateToProps)(Settings)
