/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Form, Item, Input, Label } from 'native-base';


export default class FormLogin extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Form style={{marginLeft:-15}}>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input onFocus={this.props.onAnimatedShow}/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input onFocus={this.props.onAnimatedShow}/>
          </Item>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
