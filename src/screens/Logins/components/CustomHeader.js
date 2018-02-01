/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button, Icon } from 'native-base'
import CustomNavbar from '../../../components/CustomNavbar'

export default class MyComponent extends Component {
  render() {
    const leftComponent = (
      <Button transparent onPress={this.props.onPressLeftComponent}>
        <Icon name='arrow-back' style={{color:'#fff'}} />
      </Button>
    )

    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <CustomNavbar
          leftComponent={leftComponent}
          title='Login'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
