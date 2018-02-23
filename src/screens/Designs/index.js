/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button, Icon } from 'native-base'

import {DesignBody, DesignTab} from './components'
import CustomNavbar from '../../components/CustomNavbar'

export default class Designs extends Component {
  render() {

    const leftComponent = (
      <Button transparent style={styles.headerLeft} onPress={()=>{}}>
        <Icon name='ios-arrow-back-outline' style={{fontSize: 30, color: '#fff'}} />
      </Button>
    )

    const rightComponent = (
      <Button transparent onPress={this.props.clearAllMultipleObj}>
        <Text style={styles.textHeaderRight}>Preview</Text>
      </Button>
    )

    return (
      <View style={styles.container}>
        <CustomNavbar
          title='Design'
          leftComponent={leftComponent}
          rightComponent={rightComponent}
        />
        <DesignBody />
        <DesignTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textHeaderRight : {
    color: '#fff'
  },
  headerLeft : {
    paddingRight: 20
  }
});
