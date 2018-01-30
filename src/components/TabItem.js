/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base'

export default class TabItem extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[{alignItems:'center', justifyContent:'center'},this.props.style]}
        onPress={this.props.onPress} >
        <Icon name={this.props.iconName} style={{fontSize:this.props.activeTab ? 28 : 20, color:this.props.activeTab ? '#f7355d' : 'gray'}}/>
        <Text style={[{fontSize:10, color:this.props.activeTab ? '#f7355d' : 'gray'},this.props.textStyle]}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
