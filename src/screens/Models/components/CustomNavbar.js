/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class CustomNavbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header androidStatusBarColor='#f7355d'  style={{backgroundColor:'#f7355d'}}>
          <Left>
            <Button transparent
              onPress={()=>this.props.onBackPress()}>
              <Icon name='ios-arrow-back-outline' style={{fontSize: 30, color: '#fff'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#fff'}}>T-shirt Category</Title>
          </Body>
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
