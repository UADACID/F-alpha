/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
  }

  componentDidMount(){
      console.log(this.props);
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
});
