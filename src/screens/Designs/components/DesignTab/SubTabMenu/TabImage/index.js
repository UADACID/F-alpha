/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import TabItem from '../../components/TabItem'
import { width, height } from '../../../../../../utils'
const stringPath = '../../../../../../../assets/'



class TabImage extends Component {

  changeColor = (isActive) => {
    const color = isActive ? '#fa2b6f' : '#a09a9a'
    return {
      color,
    }
  }

  render() {
    const { activeImageGallery, onChangeSubTabBottom } = this.props
    // const iconColor = activeColorTab ? require(`${stringPath}/design/color-active.png`) : require(`${stringPath}/design/color-inactive.png`)
    const iconPhotoCamera = `${stringPath}/design/photo-camera.png`
    const iconGallery = activeImageGallery ? require(`${stringPath}/design/gallery-active.png`) : require(`${stringPath}/design/gallery-inactive.png`)
    return (
      <View style={styles.container}>
        <TabItem
          style={styles.tabItemContainer}
          icon={require(`${iconPhotoCamera}`)}
          onPress={()=>onChangeSubTabBottom('imageOpenCamera')}/>
        <TabItem
          style={[styles.tabItemContainer]}
          icon={iconGallery}
          onPress={()=>onChangeSubTabBottom('imageGallery')}/>
      </View>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  const onChangeSubTabBottom = (subTabName) => dispatch({type:'CHANGE_SUB_TAB_BOTTOM_SELECTED', payload:subTabName})
  return {
    onChangeSubTabBottom
  }
}

const mapStateToProps = (state) => {
  const {activeSubTabButtom} = state
  let activeImageGallery = activeSubTabButtom == 'imageGallery' ? true : false
  return {
    activeImageGallery
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabImage)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  tabItemContainer : {
    width: width/2,
    height: 40,
    // borderWidth: 1,
    borderTopWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#f6f6f9'
  }
});
