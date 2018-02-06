/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  CameraRoll,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { Button, Icon } from 'native-base'

const { width, height } = Dimensions.get('window')

export default class ImagePhotos extends Component {

  state = {
    photos : []
  }

  componentDidMount(){
    this._handleButtonPress()
  }

  _handleButtonPress = () => {
   CameraRoll.getPhotos({
       first: 20,
       assetType: 'All',
     })
     .then(r => {
       console.log(r);
       console.log(r.edges);
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
       console.log(err);
        //Error Loading Images
     });
   };

  renderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Image
           resizeMode='contain'
           style={{
             width: width/3.5,
             height: 100,
           }}
           source={{ uri: item.node.image.uri }}
         />
      </View>
    )
  }

  _keyExtractor = (item, index) => index;


  render() {
    const { photos } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={photos}
          horizontal={true}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          />
        <TouchableOpacity style={styles.iconGridContainer}>
          <Icon name='md-grid' style={styles.iconGrid}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
    // flex: 1,
  },
  renderItem: {
    // backgroundColor: 'blue',
    padding: 0.2
  },
  iconGridContainer: {
    position:'absolute',
    backgroundColor:'#ffffffa3',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 17,
    bottom:10,
    left: 10,
    width: 35,
    height: 35
  },
  iconGrid :{
    color:'#444444',
    // backgroundColor:'#fff',
    fontSize: 20
  }
});