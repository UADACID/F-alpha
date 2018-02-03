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
import CustomNavbar from '../../components/CustomNavbar'

export default class Categories extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Fifilio',
    headerRight: <Text></Text>,
  });

  onRequestClose = () => {
    this.props.dispatch({type: 'HIDE_MODAL' })
  }

  render() {
    rightComponent = (
      <Button transparent>
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
