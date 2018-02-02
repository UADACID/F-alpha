/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Card, CardItem, Body, Text, H3, Right, Left, Thumbnail } from 'native-base'

export default class PurchaseList extends Component {
  render() {
    return (
      <Card>
        <CardItem header style={{backgroundColor:'#f6f6f6'}}>
          <H3>Purchase List</H3>
        </CardItem>
        <CardItem style={{borderBottomWidth:1, marginLeft:10, borderColor:'#cacacf'}}>
          <Left>
            <Thumbnail small source={{ uri: 'https://static1.squarespace.com/static/53bc57f0e4b00052ff4d7ccd/55875dbbe4b0403b40d16ca8/59fa186353450a6b12f4b117/1509566560930/icon-men.jpg?format=500w' }} />
            <Text>T-Shirt Oblong</Text>
          </Left>
          <Right>
            <Text note>1 pcs</Text>
            <Text note>Rp. 75.000</Text>
          </Right>
        </CardItem>
        <CardItem style={{borderBottomWidth:1, marginLeft:10, borderColor:'#cacacf'}}>
          <Left>
            <Thumbnail small source={{ uri: 'https://static1.squarespace.com/static/53bc57f0e4b00052ff4d7ccd/55875dbbe4b0403b40d16ca8/59fa186353450a6b12f4b117/1509566560930/icon-men.jpg?format=500w' }} />
            <Text>T-Shirt Oblong</Text>
          </Left>
          <Right>
            <Text note>1 pcs</Text>
            <Text note>Rp. 75.000</Text>
          </Right>
        </CardItem>
        <CardItem style={{borderBottomWidth:1, marginLeft:10, borderColor:'#cacacf'}}>
          <Left>
            <Thumbnail small source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
            <Text>T-Shirt Oblong</Text>
          </Left>
          <Right>
            <Text note>1 pcs</Text>
            <Text note>Rp. 75.000</Text>
          </Right>
        </CardItem>
        <CardItem style={{borderBottomWidth:1, marginLeft:10, borderColor:'#cacacf'}}>
          <Left>
            <Thumbnail small source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
            <Text>T-Shirt Oblong</Text>
          </Left>
          <Right>
            <Text note>1 pcs</Text>
            <Text note>Rp. 75.000</Text>
          </Right>
        </CardItem>
        <CardItem footer>
          <Text>Total Paid</Text>
          <Body>
          </Body>
          <Right>
            <Text>Rp. 450.000</Text>
          </Right>
        </CardItem>
     </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
