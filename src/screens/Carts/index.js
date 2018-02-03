/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
} from 'react-native';

export default class Carts extends Component {

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
    const { handleResetBack, nav } = this.props;
    if (this.state.showKeyboard) {
      Keyboard.dismiss()
      return setTimeout(async()=>{
        await handleResetBack(nav)
      }, 500);
    }

    await handleResetBack(nav)

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Carts component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
