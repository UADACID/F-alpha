/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button, Icon } from 'native-base'

import {DesignBody, DesignTab} from './components'
import CustomNavbar from '../../components/CustomNavbar'

export default class Designs extends Component {
  // static navigationOptions = { title: 'Design', header: null };
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    const func = () => alert('not yet');
    const onPreviewPress = params.onPreviewPress || func

    return {
      headerTitle: 'Design',
      headerRight: (
        <Button transparent style={{paddingRight:20}} onPress={onPreviewPress}>
          <Text style={styles.textHeaderRight}>PREVIEW</Text>
        </Button>
      ),
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ onPreviewPress: this.onPreviewPress });
  }

  onPreviewPress = () => {
    this.props.toScreen('Previews')
  }

  render() {
    const leftComponent = (
      <Button transparent style={styles.headerLeft} onPress={()=>{}}>
        <Icon name='ios-arrow-back-outline' style={{fontSize: 30, color: '#fff'}} />
      </Button>
    )

    const rightComponent = (
      <Button transparent onPress={this.onPreviewPress}>
        <Text style={styles.textHeaderRight}>PREVIEW</Text>
      </Button>
    )

    return (
      <View style={styles.container}>
        {/*<CustomNavbar
          title='Design'
          leftComponent={leftComponent}
          rightComponent={rightComponent}
        />*/}
        <DesignBody />
        <DesignTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textHeaderRight : {
    color: '#fff'
  },
  headerLeft : {
    paddingRight: 20
  }
});
