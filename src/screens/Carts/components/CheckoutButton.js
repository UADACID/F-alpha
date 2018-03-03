/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'native-base'

const CheckoutButton = (props) => (
    <Button style={styles.container}>
      <Text>CHECKOUT</Text>
    </Button>
);

export default CheckoutButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#dae9ef'
  },
});
