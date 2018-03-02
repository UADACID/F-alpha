/* @flow */

import React, { Component } from 'react';
import {
  View,
  BackHandler,
  StyleSheet,
  Text,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Button, Icon, Footer} from 'native-base';
import { AppColor, width, height } from '../../utils'
import CustomNavbar from '../../components/CustomNavbar'

export default class Carts extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Carts'
  });

  state = {
    showKeyboard : false
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }


  onBackPress = async () => {
    const { handleResetBack, nav } = this.props;
    if (this.state.showKeyboard) {
      Keyboard.dismiss()
      return setTimeout(async()=>{
        await handleResetBack(nav)
      }, 500);
    }

    await handleResetBack(nav)

  }

  render() {
    const leftComponent = (
      <Button transparent onPress={this.onBackPress}>
        <Icon name='arrow-back' style={{color:'#fff'}} />
      </Button>
    )
    return (
      <View style={styles.container}>
        {/*<CustomNavbar title="Carts"  leftComponent={leftComponent}/>*/}
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
          <Button style={styles.buttonCheckOut}>
            <Text style={{fontWeight:'100', fontSize:20}}>
              CHECKOUT
            </Text>
          </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // justifyContent:'center',
    // alignItems:'center',
  },
  buttonCheckOut : {
    position: 'absolute',
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:0,
    backgroundColor: '#dae9ef'
  }
});
