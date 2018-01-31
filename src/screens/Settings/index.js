/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { NavigationActions } from 'react-navigation'
import { Header } from './components'

export default class Settings extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Settings',
    headerRight: <Text style={{marginRight:20}}>Edit</Text>,
  });

  componentDidMount(){
      console.log(this.props);
  }

  onLoginPress = () => {
    this.props.toLoginScreen('Logins')
  }

  render() {
    return (
      <Container>
        <Content>
          <Header />
          <List style={{backgroundColor:'#fff', marginTop:10}}>
            <ListItem>
              <Text>Profile</Text>
            </ListItem>
            <ListItem onPress={this.onLoginPress}>
              <Text>Sign In</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('Registers')}>
              <Text>Sign Up</Text>
            </ListItem>
            <ListItem>
              <Text>Other</Text>
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
