import Categories from '../../screens/Categories'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    nav : state.nav
  }
}

export default connect(mapStateToProps)(Categories)
