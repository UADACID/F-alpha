/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button, Icon } from 'native-base'
import { takeSnapshot } from "react-native-view-shot";

import {DesignBody, DesignTab} from './components'
import CustomNavbar from '../../components/CustomNavbar'

export default class Designs extends Component {
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
     let chidlRef = this.refs.abc.onGetRefs();
     // console.log(chidlRef);

     // console.log(this.refs.modelBody);
     chidlRef.modelBody = this.refs.modelBody
     // console.log(chidlRef);
     // return
     const filterRemoveRef = this.refAdapter(chidlRef)

     if (filterRemoveRef.length <= 1) {
       return alert('you have not done the model design')
     }

     // console.log(filterRemoveRef);
      var promises = filterRemoveRef.map((ref) => {
          // //console.log(refSnapshot);
          return new Promise((resolve, reject) => {
            takeSnapshot(ref.value, {
              format: "png",
              quality: 0.3,
              result: "file",
            })
            .then(
              uri => {
                resolve({
                  uri,
                  key:ref.key
                });

              },
              error => {
                console.log(err);
                reject();
              }
            );
        });
      });

      Promise.all(promises)
      .then(res => {
      // console.log(res);
      const params = res
      this.props.toScreen('Previews', params)
        // this.createMultipeImage({obj:res})
        // resolved(true)
        // this.props.navigator.push({name:'TestingPreview', props:{images:res}})
      })
      .catch(err => {
        // rejected(true)
      })
  }

  handleSnapshot = (payload) => {

    return new Promise((resolve, reject) => {
      takeSnapshot(payload, {
         format: "png",
         quality: 0.3,
         result: "file",
       }).then(uri => {
          resolve(uri)
       });
    })

  }

  refAdapter = (payload) => {
    let arrayRefs = []
    // console.log(payload);
    for (var variable in payload) {
      if (payload.hasOwnProperty(variable)) {
        var str = variable;
        var n = str.includes("remove");
        if (!n) {
          // console.log(payload[variable]);
          arrayRefs.push({key:variable,value:payload[variable]})
        }
      }
    }

    return arrayRefs
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
        <View ref="modelBody" collapsable={false}>
          <DesignBody ref='abc'/>
        </View>
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
