/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Icon, Body, Right, Thumbnail } from 'native-base';

export default class Payments extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>ATM / Virtual Account</Text>
            </ListItem>
            <ListItem icon onPress={()=>console.log('aaa')}>
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
            <ListItem icon onPress={()=>console.log('aaa')}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-bank-permata.png')} />
              </Left>
              <Body>
                <Text>Permata Bank Transfer</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
            </ListItem>
            <ListItem icon onPress={()=>console.log('aaa')}>
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
            <ListItem itemDivider>
              <Text>Over the Counter</Text>
            </ListItem>
            <ListItem icon onPress={()=>console.log('aaa')}>
              <Left>
                <Image style={{width:40, height:40}} resizeMode='contain' source={require('../../../assets/payment/logo-indomaret.png')} />
              </Left>
              <Body>
                <Text>Indomaret</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline" style={{color:'#0073b2'}} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee'
  },
});
