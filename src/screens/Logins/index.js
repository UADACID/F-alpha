/* @flow */

import React, { Component } from 'react';
import {
  View,
  BackHandler,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { NavigationActions } from "react-navigation";
import { Content, H3, Text, Button} from 'native-base'

import { AppColor, width, height} from '../../utils'
import CustomHeader from './components/CustomHeader'
import Logo from './components/Logo'
import Footer from './components/Footer'
import FormLogin from './components/FormLogin'


export default class Logins extends Component {

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = async () => {
    const { handleBack, nav } = this.props;
    await handleBack(nav)
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader
          style={{backgroundColor:AppColor}}
          iconName={'arrow-back'}
          AppColor={AppColor}/>
        <Content>
          <View style={styles.containerBody}>
            <Logo
              containerStyle={styles.containerlogo}
              imageStyle={{transform:[{scale:1}]}}/>
            <H3>Welcome to Fifilio</H3>
            <Text style={styles.subtitle}>Sign in to continue</Text>
            <FormLogin style={{}}/>
            <Button style={styles.button}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
        <Footer
          style={styles.footer}
          textStyle={{color:AppColor}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody:{
    marginLeft:20,
    marginRight:20
  },
  containerlogo: {
    width,
    height:height/4,
    // justifyContent:'center',
    // alignItems:'center',
    marginLeft: -20,
    // paddingTop: -20,
  },
  subtitle:{
    color:'#948d8d',
    marginTop:5,
    fontSize:14
  },
  button:{
    width:width-40,
    marginTop:30,
    justifyContent:'center',
    backgroundColor:AppColor
  },
  footer:{
    width,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f3f4f8'
  }
});
