/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { width, height } from '../../../../../utils'
import TabItem from '../components/TabItem'

const stringPath = '../../../../../../assets/'

class TabMenu extends Component {

  changeBackgroundColor = (isActive) => {
    const backgroundColor = isActive ? '#fff' : '#eeedee'
    return {
      backgroundColor,
      borderTopWidth:0
    }
  }

  handleClickTextTab(value){
    const {texts, activeTextTab, activeTabBottom} = this.props
    const textFilter = texts.filter((obj) => obj.isDeleted == false)
    if (textFilter.length == 0) {
      // console.log(activeTabBottom);
      if (activeTabBottom == 'text') {
          this.props.onChangeTabBottom('')
      }else {
        // this.props.onShowTextModal()
        this.props.addNewTextForFirst()
      }
    }
    if (activeTextTab) {
      return this.props.onChangeTabBottom('')
    }
    this.props.onChangeTabBottom(value)
  }

  handleClickImageTab(value){
    if (this.props.activeImageTab) {
      return this.props.onChangeTabBottom('')
    }
    this.props.onChangeTabBottom(value)
  }

  handleClickColor(value){
    if (this.props.activeColorTab) {
      return this.props.onChangeTabBottom('')
    }
    this.props.onChangeTabBottom(value)
  }

  render() {
    const { activeColorTab, activeImageTab, activeTextTab, iconColor, iconImage, iconText } = this.props
    return (
      <View style={styles.container}>
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeColorTab)]}
          icon={iconColor}
          onPress={()=>this.handleClickColor('color')}
          />
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeImageTab)]}
          icon={iconImage}
          onPress={()=>this.handleClickImageTab('image')}
          />
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeTextTab)]}
          icon={iconText}
          onPress={()=>this.handleClickTextTab('text')}
          />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeTabBottom = (tabName) => dispatch({type:'CHANGE_TAB_BOTTOM_SELECTED', payload:tabName})
  const onShowTextModal = () => dispatch({type:'SHOW_TEXT_MODAL'})
  const addNewTextForFirst = () => dispatch({type:'ADD_FIRST_TEXT', payload:'Long Press to Edit'})
  return {
    onChangeTabBottom,
    addNewTextForFirst,
    onShowTextModal
  }
}

const mapStateToProps = (state) => {
  let { activeTabBottom, multipleTextDragable} = state
  let activeColorTab = activeTabBottom == 'color' ? true : false
  let activeImageTab = activeTabBottom == 'image' ? true : false
  let activeTextTab = activeTabBottom == 'text' ? true : false

  const iconColor = activeColorTab ? require(`${stringPath}/design/color-active.png`) : require(`${stringPath}/design/color-inactive.png`)
  const iconImage = activeImageTab ? require(`${stringPath}/design/image-active.png`) : require(`${stringPath}/design/image-inactive.png`)
  const iconText = activeTextTab ? require(`${stringPath}/design/text-active.png`) : require(`${stringPath}/design/text-inactive.png`)

  return {
    activeColorTab,
    activeImageTab,
    activeTextTab,
    iconColor,
    iconImage,
    iconText,
    activeTabBottom,
    texts : multipleTextDragable.texts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#eeedee'
  },
  tabItemContainer : {
    width: width/3,
    height: 40,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#eeedee'
  }
});
