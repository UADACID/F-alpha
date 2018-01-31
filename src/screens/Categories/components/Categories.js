/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import { icons } from '../../../../assets/categories/icons.js'

const { width, height } = Dimensions.get('window')

class Categories extends Component {

  handlePressCategory = () => {
    console.log(this.props);
    this.props.hideModal()
    this.props.navigation.navigate('Categories')
  }

  _keyExtractor = (item, index) => index;

  renderItem = (item) => {
    // console.log(item);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.handlePressCategory}>
        <Image
          style={{width:width/4, height:width/4}}
          source={item.item.uri}/>
      </TouchableOpacity>
    )
  }

  render() {
    // console.log(this.props);
    // console.log(icons);
    return (
      <View style={styles.container}>
        <Text style={{padding:this.props.title? 10 : 0, paddingLeft:this.props.title ? 20 : 0}}>{this.props.title}</Text>
        <FlatList
          data={icons}
          horizontal={false}
          numColumns={4}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
          scrollEnabled={false}
          />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {dispatch({type:'HIDE_MODAL'})}
  }
}

export default connect(null, mapDispatchToProps)(Categories)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
