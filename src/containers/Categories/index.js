import Categories from '../../screens/Categories'
import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";


const mapStateToProps = (state) => {
  return {
    nav : state.nav
  }
}

export default connect(mapStateToProps)(Categories)
