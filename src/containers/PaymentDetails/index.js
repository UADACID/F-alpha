import PaymentDetails from '../../screens/PaymentDetails'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  onAddNewTransactionPayment: (payload) => dispatch({type:'ADD_NEW_TRANSACTION_PAYMENT', payload}),
  resetTransactionPayment:() => dispatch({type:'RESET_TRANSACTION_PAYMENT'}),
  onBackPress: () => {
    dispatch({type:'RESET_TRANSACTION_PAYMENT'})
    dispatch(NavigationActions.back());
  }
})

const mapStateToProps = (state) => {
  return {
    paymentsReducer : state.paymentsReducer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetails)
