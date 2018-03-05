// import React from 'react'
// import { StackNavigator, TabNavigator } from 'react-navigation'
// import InternetBankings from '../containers/Payments/InternetBankings'
// import VirtualAccounts from '../containers/Payments/VirtualAccounts'
// import ElectronicMonies from '../containers/Payments/ElectronicMonies'
// import Counters from '../containers/Payments/Counters'
//
// import Payments from '../containers/Payments'
//
// const tabBarOptions = {
//   activeBackgroundColor:'gray',
//   inactiveBackgroundColor:'#ffffff',
//   labelStyle: {
//     fontSize: 10,
//     color:'gray'
//   },
//   style: {
//     backgroundColor: '#ffffff',
//   },
//   // showIcon: true,
//   activeTintColor: '#f7355d',
//   inactiveTintColor: 'red',
//   indicatorStyle:{
//     backgroundColor:'#f7355d'
//   }
//   // labelStyle: {
//   //   fontSize: 12,
//   // },
//   // style: {
//   //   backgroundColor: '#ffffff',
//   // },
//   // tabStyle:{
//   //   height:50
//   // }
// }
//
// const tabNavigatorConfig = {
//   // tabBarPosition: 'bottom',
//   // swipeEnabled: false,
//   // animationEnabled: false,
//   // tabBarComponent: (props) => <CustomTab {...props} />,
//   // lazy:false,
//   tabBarOptions
// }
//
// const PaymentTabs = TabNavigator({
//   InternetBankings : {
//     screen : InternetBankings
//   },
//   VirtualAccounts : {
//     screen : VirtualAccounts
//   },
//   ElectronicMonies : {
//     screen : ElectronicMonies
//   },
//   Counters : {
//     screen : Counters
//   }
// },tabNavigatorConfig)
//
// const tab = () => {
//   return (<PaymentTabs />)
// }
//
// // const PaymentsStackNavigator = StackNavigator({
// //   Payments : {
// //     screen : tab
// //   }
// // })
//
// export default tab
