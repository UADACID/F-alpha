/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import axios from 'axios'

export default class Transactions extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Transactions',
  });

  doRequest = () => {
    axios({
      method: 'post',
      url: 'https://api.sandbox.midtrans.com/v2/charge',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : 'Basic U0ItTWlkLXNlcnZlci1ja2lUOXV0VUFvWTBMbUFWbHlBU2xqcHk6'
      },
      data : {
        "payment_type": "bank_transfer",
        "bank_transfer": {
          "bank": "bca"
        },
        "transaction_details": {
          "order_id": "order-121232",
          "gross_amount": 99000
        },
          "customer_details": {
              "email": "test@Midtrans.com",
              "first_name": "budi",
              "last_name": "utomo",
              "phone": "+6281 1234 1234"
          },
          "item_details": [
          {
             "id": "item01",
             "price": 50000,
             "quantity": 1,
             "name": "Ayam Zozozo"
          },
          {
             "id": "item02",
             "price": 49000,
             "quantity": 1,
             "name": "Ayam Xoxoxo"
          }
         ]
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.doRequest}>I'm the Transactions component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
