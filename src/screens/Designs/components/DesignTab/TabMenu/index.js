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
    const backgroundColor = isActive ? '#eeedee' : '#fff'
    return {
      backgroundColor
    }
  }

  render() {
    const iconColor = `${stringPath}/design/color.png`
    const iconImage = `${stringPath}/design/image.png`
    const iconText = `${stringPath}/design/text.png`
    const { activeColorTab, activeImageTab, activeTextTab } = this.props
    return (
      <View style={styles.container}>
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeColorTab)]}
          icon={require(`${iconColor}`)}
          onPress={()=>this.props.onChangeTabBottom('color')}
          />
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeImageTab)]}
          icon={require(`${iconImage}`)}
          onPress={()=>this.props.onChangeTabBottom('image')}
          />
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeTextTab)]}
          icon={require(`${iconText}`)}
          onPress={()=>this.props.onChangeTabBottom('text')}
          />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  const onChangeTabBottom = (tabName) => dispatch({type:'CHANGE_TAB_BOTTOM_SELECTED', payload:tabName})
  return {
    onChangeTabBottom
  }
}

const mapStateToProps = (state) => {
  let {activeTabBottom} = state
  let activeColorTab = activeTabBottom == 'color' ? true : false
  let activeImageTab = activeTabBottom == 'image' ? true : false
  let activeTextTab = activeTabBottom == 'text' ? true : false
  return {
    activeColorTab,
    activeImageTab,
    activeTextTab
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabMenu)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: '#fff'
  },
  tabItemContainer : {
    width: width/3,
    height: 40,
    borderWidth: 1,
    justifyContent:'center',
    alignItems:'center',
    borderColor: '#f6f6f9'
  }
});
