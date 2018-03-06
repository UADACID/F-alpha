/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions
} from 'react-native';
import axios from 'axios'
import { Container, Header, Content, List, ListItem, Text, Left, Icon, Body, Right, Thumbnail } from 'native-base';


const { width, height } = Dimensions.get('window')

export default class Payments extends Component {

  onPressPaymentTypeATM = ({payment_type, bankName, storeName}) => {

    const params = {payment_type, bankName, storeName}

    this.props.toScreen({routeName:'PaymentDetails', params})
    // // this.props.dispatch({type:'SHOW_OVERLAY'})
    // const randomString = Math.random().toString(36).substring(7)
    // const object = {...defaultBody}
    //
    // object.payment_type = payment_type
    // object.transaction_details.order_id = `order-${randomString}`
    // switch (bankName) {
    //   case 'mandiri':
    //
    //     const echannel = {
    //           "bill_info1" : "Payment For:",
    //           "bill_info2" : "Food"
    //         }
    //     object.echannel = echannel
    //     this.service(object)
    //     break;
    //   case 'permata':
    //     object.bank_transfer = {"bank": bankName}
    //     this.service(object)
    //     break;
    //   case 'bca':
    //     object.bank_transfer = {"bank": bankName}
    //     this.service(object)
    //     break;
    //   default:
    //     object.cstore = {
    //       "store": storeName,
    //       "message": "Message to display"
    //     }
    //     this.service(object)
    //     break;
    // }

    // console.log(object);
    // console.log(Math.random().toString(36).substring(7));
    // this.props.navigation.navigate('PaymentDetails')
  }

  // service = (data) => {
  //   // return
  //   axios({
  //     method: 'post',
  //     url: 'https://api.sandbox.midtrans.com/v2/charge',
  //     auth: {
  //         username: 'SB-Mid-server-ckiT9utUAoY0LmAVlyASljpy',
  //         password: ''
  //     },
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     data : data
  //   })
  //   .then(response => {
  //     // this.props.dispatch({type:'HIDE_OVERLAY'})
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     // this.props.dispatch({type:'HIDE_OVERLAY'})
  //     console.log(err);
  //     console.log(err.response);
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>ATM / Virtual Account</Text>
            </ListItem>
            <ListItem icon onPress={()=>this.onPressPaymentTypeATM({payment_type: 'echannel', bankName:'mandiri'})}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-bank-mandiri.png')} />
              </Left>
              <Body>
                <Text>Mandiri Bill Payment</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
            </ListItem>
            {/*<ListItem icon onPress={()=>this.onPressPaymentTypeATM({payment_type: 'bank_transfer', bankName:'permata'})}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-bank-permata.png')} />
              </Left>
              <Body>
                <Text>Permata Bank Transfer</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
            </ListItem>*/}
            <ListItem icon onPress={()=>this.onPressPaymentTypeATM({payment_type: 'bank_transfer', bankName:'bca'})}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-bank-bca.png')} />
              </Left>
              <Body>
                <Text>BCA Bank Transfer</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
            </ListItem>
            {/*<ListItem itemDivider>
              <Text>Over the Counter</Text>
            </ListItem>
            <ListItem icon onPress={()=>this.onPressPaymentTypeATM({payment_type: 'cstore', storeName:'indomaret'})}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-indomaret.png')} />
              </Left>
              <Body>
                <Text>Indomaret</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
            </ListItem>*/}
          </List>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});




// const defaultBody = {
//     "payment_type": "echannel",
//     "transaction_details": {
//         "gross_amount": 99000,
//         "order_id": "order-101dns"
//     },
//     "customer_details": {
//         "email": "test@Midtrans.com",
//         "first_name": "budi",
//         "last_name": "utomo",
//         "phone": "+6281 1234 1234"
//     },
//     "item_details": [
//           {
//              "id": "item01",
//              "price": 50000,
//              "quantity": 1,
//              "name": "Ayam Zozozo"
//           },
//           {
//              "id": "item02",
//              "price": 49000,
//              "quantity": 1,
//              "name": "Ayam Xoxoxo"
//           }
//          ],
// }
