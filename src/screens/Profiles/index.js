/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  BackHandler,
  StyleSheet,
} from 'react-native';

export default class Profiles extends Component {

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
    return (
      <View style={styles.container}>
        <Text>I'm the Profiles component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
