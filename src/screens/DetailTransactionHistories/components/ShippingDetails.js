/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Card, CardItem, Body, Text, H3, Right, Left } from 'native-base'

export default class ShippingDetails extends Component {
  render() {
    return (
      <Card>
        <CardItem header style={{backgroundColor:'#f6f6f6'}}>
          <H3>Shipping Details</H3>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Recipient's name</Text>
            <Text note>Pratama Setya Aji</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Address</Text>
            <Text note>Perumahan Griya Mandala, Jl. Kehormatan Blok A No.19 Rt.002 Rw.08 Duri Kepa, Kebon Jeruk, Jakarta Barat, Indonesia, 11510</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>City</Text>
            <Text note>Yogyakarta</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Shipping Code</Text>
            <Text note>51314</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Phone Number</Text>
            <Text note>085641560xxx</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text>Delivery Receipt</Text>
            <Text note>00002777719</Text>
          </Body>
        </CardItem>
        <CardItem footer style={{backgroundColor:'#f6f6f6'}}>
          <Right>
            <Text style={{color:'green'}}>Payment Status Completed</Text>
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
