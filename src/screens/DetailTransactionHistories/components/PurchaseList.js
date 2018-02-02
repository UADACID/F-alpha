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
