/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Categories extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Fifilio',
    headerRight: <Text></Text>,
  });

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.props.navigation.navigate('Logins')}>I'm the Category component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
});
