/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Content, Card, CardItem, Body, Icon, Left, Right } from 'native-base';

import TextTitle from '../../../components/TextTitle'

const { width, height } = Dimensions.get('window')

const images = [
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%209.34.59%20PM.png?alt=media&token=f4a5554d-c5a6-4666-a653-6e30ac1404f7',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%209.38.31%20PM.png?alt=media&token=e98dee35-c337-4b35-9d25-baabfce66f2c',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%209.40.14%20PM.png?alt=media&token=0fd1b0a3-78d7-4757-a300-374d87d462ce',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.25.57%20PM.png?alt=media&token=bcfca931-3833-4abd-a15c-8adb8bd52011',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.29.14%20PM.png?alt=media&token=3bfd89bd-f83b-4574-81d9-1c18c3166a02'

]

export default class CustomListDesign extends Component {


  _keyExtractor = (item, index) => index;

  renderItem = (item) => {
    // console.log(item);
    return (
      <TouchableOpacity>
          <Card style={{width:width/2.5, height:width/1.5}}>
            <CardItem>
              <Body>
              <ImageBackground
                resizeMode='contain'
                style={{width:width/3.5, height:width/2.2, justifyContent:'flex-end', alignItems:'flex-end'}}
                source={{uri:item.item}}>
                <View style={{height:30, width:30, justifyContent:'center', alignItems:'center', backgroundColor:'#f7355d', borderRadius:15}}>
                  <Image
                    style={{height:20, width:20}}
                    source={require('../../../../assets/categories/paintbrush.png')}
                  />
                </View>
              </ImageBackground>
              </Body>
            </CardItem>
            <CardItem style={{height:30}}>
              <Body>
                <Text numberOfLines={1} ellipsizeMode='tail'>NativeBase</Text>
              </Body>
            </CardItem>
          </Card>
      </TouchableOpacity>
    )
  }

  render() {

    const rightComponent = (
      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginRight:10}}>
        <Text style={{padding:10, paddingRight:10, color:'#acadae'}}>Lihat Semua</Text>
        <Icon name='ios-arrow-forward-outline' style={{fontSize:20, color:'#f7355d'}}/>
      </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
        <TextTitle
          leftComponent={<Text style={{padding:10, paddingLeft:20}}>Create Your Own Design</Text>}
          rightComponent={rightComponent} />
        <FlatList
          data={images}
          horizontal={true}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
