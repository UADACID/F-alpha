/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
} from 'react-native';
import { Content, Button, Icon } from 'native-base'

import { height, width, AppColor } from '../../utils'
import { ImageSlider, Categories as Category, BestSelling, Brand, ModalCategories} from './components'
import { services } from '../../api'
import CustomNavbar from '../../components/CustomNavbar'

export default class Categories extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Fifilio',
    headerRight: <Text></Text>,
  });

  componentDidMount(){
    this.props.allCategories()
    // console.log(this.props);
    // this.props.dispatch(services.categories.find())
  }

  onRequestClose = () => {
    this.props.closeModal()
  }

  handleToCarts = () => {
    this.props.toScreen('Carts')
  }

  render() {
    rightComponent = (
      <Button transparent onPress={this.handleToCarts}>
        <Icon name='cart' style={{fontSize: 30, color: '#fff'}} />
      </Button>
    )
    return (
      <View style={styles.container}>
        <CustomNavbar title='Fifilio' rightComponent={rightComponent}/>
        <Content>
          <ImageSlider />
          <Category navigation={this.props.navigation} title={'Kategori Desain'}/>
          <BestSelling />
          <Brand />
        </Content>
        <ModalCategories navigation={this.props.navigation} onRequestClose={this.onRequestClose} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
