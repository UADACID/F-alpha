/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
} from 'react-native';
import { Content } from 'native-base'
import { CustomNavbar, CustomHeader, CustomListDesign, CustomListPromote } from './components'

export default class Profiles extends Component {

  state = {
    showKeyboard : false
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    this.props.allModels()
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
    console.log(this.props);
    return (
      <View style={styles.container}>
      <CustomNavbar onBackPress={this.onBackPress}/>
      <Content>
        <CustomHeader />
        <CustomListDesign toScreen={this.props.toScreen} {...this.props}/>
        <CustomListPromote />
        <Text onPress={()=>this.props.toScreen('Designs')}>T-Shirt Category</Text>
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
