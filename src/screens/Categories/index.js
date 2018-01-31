/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  BackHandler,
  StyleSheet,
} from 'react-native';

export default class Categories extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Fifilio',
    headerRight: <Text></Text>,
  });
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    console.log(this.props);
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
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
