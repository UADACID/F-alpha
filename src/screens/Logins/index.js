/* @flow */

import React, { Component } from 'react';
import {
  View,
  BackHandler,
  StyleSheet,
  StatusBar,
  Animated,
  Keyboard,
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

  constructor(){
    super()
    this.state = {
      showKeyboard : false
    }
    this.heightLogoContainer = new Animated.Value(height/4)
    this.scaleLogo = new Animated.Value(1)
    this.positionLogo = new Animated.Value((width/2)-50)
    this.heightFooterContainer = new Animated.Value(50)
    this.onAnimatedShow = this.onAnimatedShow.bind(this)
    this.onAnimatedHide = this.onAnimatedHide.bind(this)
  }

  componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }


  _keyboardDidShow = () => {
    this.setState({
      showKeyboard:true
    })
    // alert('Keyboard Shown');
    // this.onAnimatedShow()
  }

  _keyboardDidHide = () =>{
    this.onAnimatedHide()
    this.setState({
      showKeyboard:false
    })
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onBackPress = async () => {
    const { handleBack, nav } = this.props;
    if (this.state.showKeyboard) {
      Keyboard.dismiss()
      return setTimeout(async()=>{
        await handleBack(nav)
      }, 500);
    }

    await handleBack(nav)

  }

  onAnimatedShow = () => {
    Animated.parallel([
      Animated.timing(this.heightLogoContainer, {
        toValue : 10,
        duration: 500,
      }),
      Animated.timing(this.scaleLogo, {
        toValue : 0.5,
        duration: 500,
        // useNativeDriver: true
      }),
      Animated.timing(this.positionLogo, {
        toValue : 20,
        duration: 500,
      }),
      Animated.timing(this.heightFooterContainer, {
        toValue : 0,
        duration: 300,
      }),
    ]).start()
  }

  onAnimatedHide = () => {
    Animated.parallel([
      Animated.timing(this.heightLogoContainer, {
        toValue : height/4,
        duration: 300,
      }),
      Animated.timing(this.scaleLogo, {
        toValue : 1,
        duration: 300,
        // useNativeDriver: true
      }),
      Animated.timing(this.positionLogo, {
        toValue : (width/2)-50,
        duration: 300,
      }),
      Animated.timing(this.heightFooterContainer, {
        toValue : 50,
        duration: 300,
      }),
    ]).start()
  }

  render() {

    const animatedheightLogoContainer = {height:this.heightLogoContainer}
    const animatedScaleLogo = {transform:[{scale:this.scaleLogo}]}
    const animatedRigthPosition = {right:this.positionLogo}
    const animatedheightFooterContainer = {height:this.heightFooterContainer}
    // const animatedPositionLogo = {right:this.positionLogo}
    return (
      <View style={styles.container}>
        <CustomHeader
          style={{backgroundColor:AppColor}}
          onPressLeftComponent={this.onBackPress}
          iconName={'arrow-back'}
          AppColor={AppColor}/>
        <Content>
          <View style={styles.containerBody}>
            <Logo
              containerStyle={[styles.containerlogo,animatedheightLogoContainer]}
              imageStyle={[animatedScaleLogo, animatedRigthPosition]}/>
            <H3>Welcome to Fifilio</H3>
            <Text style={styles.subtitle}>Sign in to continue</Text>
            <FormLogin
              style={{}}
              onAnimatedShow={this.onAnimatedShow}
              onAnimatedHide={this.onAnimatedHide}/>
            <Button
              style={styles.button}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
        <Footer
          style={[styles.footer, animatedheightFooterContainer]}
          textStyle={{color:AppColor}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerBody:{
    marginLeft:20,
    marginRight:20
  },
  containerlogo: {
    width,
    height:height/4,
    // height: 10,
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
