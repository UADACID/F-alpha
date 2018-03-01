/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window')

export default class Previews extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Preview'
  });

  render() {
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image style={{height, width}} resizeMode='contain' source={{uri:this.props.navigation.state.params.uri}}/>
          {this.props.navigation.state.params.map((obj, i) => {
            return (
              <Image key={i} style={{height:50, width:200}} resizeMode='contain' source={{uri:obj.uri}}/>
            )
          })}
          <Text onPress={()=>this.props.toScreen('Carts')}>I'm the Previews component</Text>
        </ScrollView>
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
