/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';


export default class Previews extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Previews'
  });

  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <View>
          <Image style={{height:400, width:300}} resizeMode='cover' source={{uri:'https://cdn.razorfrog.com/wp-content/uploads/2014/10/T-shirt-mock-up-vol01.jpg'}}/>
        </View>
        <Text onPress={()=>this.props.toScreen('Carts')}>I'm the Previews component</Text>
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
