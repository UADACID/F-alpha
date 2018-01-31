/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Body, Right, Button, Icon, Title } from 'native-base';

export default class CustomNavbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header androidStatusBarColor='#f7355d'  style={{backgroundColor:'#f7355d'}}>
          <Body>
            <Title>Fifilio</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='cart' style={{fontSize: 30, color: '#fff'}} />
            </Button>
          </Right>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
