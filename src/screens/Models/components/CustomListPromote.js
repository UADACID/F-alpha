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
  // 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.52.27%20PM.png?alt=media&token=e41dc9a5-92bc-4fd5-b680-17096d1a3008',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.56.51%20PM.png?alt=media&token=130ec2e2-080b-4861-a2ed-8f368015e88d',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.54.36%20PM.png?alt=media&token=7b361575-5a7b-4276-8948-d98faa8c83aa',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.56.51%20PM.png?alt=media&token=130ec2e2-080b-4861-a2ed-8f368015e88d',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.54.36%20PM.png?alt=media&token=7b361575-5a7b-4276-8948-d98faa8c83aa',
  // 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.58.25%20PM.png?alt=media&token=9193d0cc-d4f4-47e6-88ea-d0943c9ae4e2',
  'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.56.51%20PM.png?alt=media&token=130ec2e2-080b-4861-a2ed-8f368015e88d',
  // 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/Screen%20Shot%202018-01-25%20at%2011.59.42%20PM.png?alt=media&token=d672edac-ae9e-44c1-99de-b2b8001c0fa8'

]

export default class CustomListPromote extends Component {


  _keyExtractor = (item, index) => index;

  renderItem = (item) => {
    // console.log(item);
    return (
      <TouchableOpacity>
          <Card style={{width:width/2, height:(width/1.3)+30}}>
            <CardItem cardBody>
              <ImageBackground
                resizeMode='contain'
                style={{width:(width/2), height:width/1.5, justifyContent:'flex-end', alignItems:'flex-end'}}
                source={{uri:item.item}}>
                <View style={{height:30, width:30, justifyContent:'center', alignItems:'center', backgroundColor:'#ffffffad',borderColor:'#f7355d', borderWidth:1,  borderRadius:15, marginRight:15}}>
                  <Text style={{color:'#f7355d'}}>Buy</Text>
                </View>
              </ImageBackground>
            </CardItem>
            <CardItem style={{height:30, justifyContent:'center', alignItems:'center'}}>
              <Left>
                <Image
                  resizeMode='contain'
                  style={{width:17, height:17}}
                  source={require('../../../../assets/categories/rp.png')}>
                </Image>
                <Text numberOfLines={1} ellipsizeMode='tail'> 75.000,00</Text>
              </Left>
            </CardItem>
            <CardItem style={{height:30, justifyContent:'center', alignItems:'center'}}>
              <Left>
                <Icon name='ios-eye' style={{fontSize:16}}/>
                <Text numberOfLines={1} ellipsizeMode='tail'> 234</Text>
              </Left>
            </CardItem>
          </Card>
      </TouchableOpacity>
    )
  }

  render() {

    const rightComponent = (
      <TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginRight:10}}>
        {/*<Text style={{padding:10, paddingRight:10, color:'#acadae'}}>Lihat Semua</Text>
        <Icon name='ios-arrow-forward-outline' style={{fontSize:20, color:'#f7355d'}}/>*/}
      </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
        <TextTitle
          leftComponent={<Text style={{padding:10, paddingLeft:20}}>Promoted Model</Text>}
          rightComponent={rightComponent} />
        <FlatList
          data={images}
          horizontal={false}
          numColumns={2}
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
