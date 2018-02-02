/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  BackHandler,
  StyleSheet,
} from 'react-native';
import { Button, Icon, Content, Card, CardItem, Body, H3, Right } from 'native-base'
import CustomNavbar from '../../components/CustomNavbar'
import ShippingDetails from './components/ShippingDetails'
import PurchaseList from './components/PurchaseList'

export default class DetailTransactionHistories extends Component {

  state = {
    showKeyboard : false
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }


  onBackPress = async () => {
    const { handleBack, nav } = this.props;
    if (this.state.showKeyboard) {
      Keyboard.dismiss()
      return setTimeout(async()=>{
        await handleBack(nav)
      }, 500);
    }

    await handleBack(nav)

  }

  render() {

    const leftComponent = (
      <Button transparent onPress={this.onBackPress}>
        <Icon name='arrow-back' style={{color:'#fff'}} />
      </Button>
    )

    return (
      <View style={styles.container}>
        <CustomNavbar
          leftComponent={leftComponent}
          title='Detail Transaction'
          />
          <Content contentContainerStyle={{padding:5}} >
            <ShippingDetails />
            <PurchaseList />
          </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
