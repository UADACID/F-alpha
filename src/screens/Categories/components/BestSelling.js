/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Content, Card, CardItem, Body, Icon, Left, Right } from 'native-base';

import TextTitle from '../../../components/TextTitle'

const { width, height } = Dimensions.get('window')

const images = [
  'http://pernik.co.id/wp-content/uploads/2015/06/distro-olahraga.jpg',
  'https://ciptaloka-mockups.s3.amazonaws.com/design/nyor5y8458-336-0-2--l.jpg',
  'https://d.line-scdn.net/lcp-prod-photo/20171020_80/@kuy3438e_1508485242407TCBrl_JPEG/cartoon23.jpg'

]

export default class BestSelling extends Component {


  _keyExtractor = (item, index) => index;

  renderItem = (item) => {
    // console.log(item);
    return (
      <TouchableOpacity>
          <Card style={{width:width/2.5, height:width/1.5}}>
            <CardItem>
              <Body>
              <Image
                resizeMode='contain'
                style={{width:width/3.5, height:width/3}}
                source={{uri:item.item}}/>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>NativeBase</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="md-star" style={{color:'#F7CA18', fontSize:15}} />
                <Icon name="md-star" style={{color:'#F7CA18', fontSize:15}} />
                <Icon name="md-star" style={{color:'#F7CA18', fontSize:15}} />
                <Icon name="md-star" style={{color:'#F7CA18', fontSize:15}} />
                <Icon name="md-star" style={{color:'#F7CA18', fontSize:15}} />
              </Left>
              <Right>
                <Text style={{color:'#f7355d'}}>Buy</Text>
              </Right>
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
          leftComponent={<Text style={{padding:10, paddingLeft:20}}>Desain Terlaris</Text>}
          rightComponent={rightComponent} />
        <FlatList
          data={images}
          horizontal={true}
          numColumns={1}
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
