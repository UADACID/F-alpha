/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
} from 'react-native';
import { Content } from 'native-base'

import { height, width, AppColor } from '../../utils'
import { ImageSlider, Categories as Category, CustomNavbar, BestSelling, Brand, ModalCategories} from './components'

export default class Categories extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Fifilio',
    headerRight: <Text></Text>,
  });

  render() {

    return (
      <View style={styles.container}>
        <CustomNavbar />
        <Content>
          <ImageSlider />
          <Category navigation={this.props.navigation} title={'Kategori Desain'}/>
          <BestSelling />
          <Brand />
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
