/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Keyboard,
  BackHandler,
  StyleSheet,
} from 'react-native';
import { Button, Icon, Content, Card, CardItem, Body } from 'native-base'
import CustomNavbar from '../../components/CustomNavbar'

export default class DetailOrderHistories extends Component {

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
    const { handleBack, nav } = this.props;
    if (this.state.showKeyboard) {
      Keyboard.dismiss()
      return setTimeout(async()=>{
        await handleBack(nav)
      }, 500);
    }

    await handleBack(nav)

  }

  render() {

    const leftComponent = (
      <Button transparent onPress={this.onBackPress}>
        <Icon name='arrow-back' style={{color:'#fff'}} />
      </Button>
    )

    return (
      <View style={styles.container}>
        <CustomNavbar
          leftComponent={leftComponent}
          title='Detail Order'
          />
          <Content>
            <Card>
              <CardItem header>
                <Text>NativeBase</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>GeekyAnts</Text>
              </CardItem>
           </Card>
          </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
