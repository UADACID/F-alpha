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

  render() {
    const { activeColorTab, activeImageTab, activeTextTab } = this.props
    const iconColor = activeColorTab ? require(`${stringPath}/design/color-active.png`) : require(`${stringPath}/design/color-inactive.png`)
    const iconImage = activeImageTab ? require(`${stringPath}/design/image-active.png`) : require(`${stringPath}/design/image-inactive.png`)
    const iconText = activeTextTab ? require(`${stringPath}/design/text-active.png`) : require(`${stringPath}/design/text-inactive.png`)
    return (
      <View style={styles.container}>
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeColorTab)]}
          icon={iconColor}
          onPress={()=>this.props.onChangeTabBottom('color')}
          />
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeImageTab)]}
          icon={iconImage}
          onPress={()=>this.props.onChangeTabBottom('image')}
          />
        <TabItem
          style={[styles.tabItemContainer,this.changeBackgroundColor(activeTextTab)]}
          icon={iconText}
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