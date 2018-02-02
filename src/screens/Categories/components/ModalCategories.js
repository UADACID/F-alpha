/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import { connect } from 'react-redux'
import Categories from './Categories'

class ModalCategories extends Component {

  constructor(){
    super()
    this.animatedScaleValue = new Animated.Value(0.05)
    this.animatedTYValue = new Animated.Value(100)
    this.animatedOpacity = new Animated.Value(0)
  }

  // componentWillMount(){
  //
  // }

  componentWillUnMount(){
      Animated.parallel([
        Animated.timing(this.animatedTYValue, {
          toValue: 100,
          duration: 1000
        }),
        Animated.timing(this.animatedScaleValue,{
          toValue: 0.05,
          duration: 1000
        }),
        Animated.timing(this.animatedOpacity,{
          toValue: 0,
          duration: 500
        })
      ]).start()
  }

  openModal = () => {
    Animated.parallel([
      Animated.timing(this.animatedTYValue, {
        toValue: 0,
        duration: 500
      }),
      Animated.timing(this.animatedScaleValue,{
        toValue: 0.9,
        duration: 500
      }),
      Animated.timing(this.animatedOpacity,{
        toValue: 1,
        duration: 500
      })
    ]).start()
  }

  closeModal = () => {
    Animated.parallel([
      Animated.timing(this.animatedTYValue, {
        toValue: 100,
        duration: 200
      }),
      Animated.timing(this.animatedScaleValue,{
        toValue: 0.0005,
        duration: 200
      }),
      Animated.timing(this.animatedOpacity,{
        toValue: 0,
        duration: 200
      })
    ]).start()

    setTimeout(()=> {
      this.props.dispatch({type: 'HIDE_MODAL' })
    }, 180);

  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
    //
    if (nextProps.showModal === true) {
            this.openModal()
    }

  }

  render() {
    const animateStyles = {
      transform : [
        {translateY: this.animatedTYValue},
        {scale: this.animatedScaleValue}
      ],
      opacity:this.animatedOpacity
    }
    return (
      <View style={styles.container}>
        <Modal
          visible={this.props.showModal}
          animationType={'fade'}
          transparent={true}
          onRequestClose={this.props.onRequestClose}
          >
          <TouchableWithoutFeedback onPress={this.closeModal}>
          <View style={styles.modalContainer}>
            <Animated.View style={[styles.innerContainer,animateStyles]}>
              <Categories navigation={this.props.navigation}/>
              <View style={{alignItems:'center'}}>
                <View style={styles.triangle}/>
                {/*<Image
                  style={{height:20, width:20}}
                  source={require('../../../assets/dashboard/down-arrow.png')}
                />*/}
              </View>
            </Animated.View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showModal: state.modalDashboard
  }
}


export default connect(mapStateToProps)(ModalCategories)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    flex:1,
    justifyContent:'center',
  },
  innerContainer : {
    position:'absolute',
    bottom:100
  },
  triangle:{
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 20,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#ffffff'
  }
});
