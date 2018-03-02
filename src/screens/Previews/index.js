/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Button, Card, CardItem, Content } from 'native-base'

const { width, height } = Dimensions.get('window')

export default class Previews extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Preview',
  });

  onPressAddToCart = () => {
    this.props.toScreen('Carts')
  }

  renderSize({sizeName, sizeLenght}){
    if (sizeLenght == 0) {
      return (
        <View />
      )
    }else{
      return (
        <View style={styles.size}>
          <Text style={{color:'#ffffff'}}>{sizeName}</Text>
        </View>
      )
    }
  }

  filterItemAdapter(array, key){
    return array.filter(obj => obj.key.includes(key) == true)
  }

  render(){
    const { state } = this.props.navigation
    const { images, variantSelected } = state.params
    console.log({ images, variantSelected });
    const { qtySizeS, qtySizeM, qtySizeL, qtySizeXL, qtySizeXXL, price } = variantSelected

    const filterTextAttachment = this.filterItemAdapter(images,'text')
    const numberOfTextAttachment = filterTextAttachment.length
    const additionalCostOfText = numberOfTextAttachment * 10000

    const filterImageAttachment = this.filterItemAdapter(images,'image')
    const numberOfImageAttachment = filterImageAttachment.length
    const additionalCostOfImage = numberOfImageAttachment * 15000

    const additionalTotalCost = price + additionalCostOfText + additionalCostOfImage


    const filterImage = this.filterItemAdapter(images,'modelBody')
    const imageBody = filterImage[0]

    return(
      <View style={styles.container}>
        <Content>
          <View>
            <Card>
                <Image
                  resizeMode='contain'
                  style={{width, height:width, marginTop:20, marginBottom:20}}
                  source={{uri:imageBody.uri}}
                />
            </Card>
          </View>
          <View>
            <Text style={{alignSelf:'center'}}>
              SIZE AVAILABLE
            </Text>
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              {this.renderSize({sizeName:'S', sizeLenght: qtySizeS})}
              {this.renderSize({sizeName:'M', sizeLenght: qtySizeM})}
              {this.renderSize({sizeName:'L', sizeLenght: qtySizeL})}
              {this.renderSize({sizeName:'XL', sizeLenght: qtySizeXL})}
              {this.renderSize({sizeName:'XXL', sizeLenght: qtySizeXXL})}
            </View>
          </View>
          <View>
            <Text style={{alignSelf:'center', color:'#000'}}>
              Rp. {additionalTotalCost}
            </Text>
          </View>
        </Content>
        <Button style={styles.button} onPress={this.onPressAddToCart}>
          <Text style={{fontWeight:'100', fontSize:20}}>
            ADD TO CART
          </Text>
        </Button>
      </View>
    )
  }

  // render() {
  //   console.log(this.props.navigation);
  //   return (
  //     <View style={styles.container}>
  //       <ScrollView>
  //         <Image style={{height, width}} resizeMode='contain' source={{uri:this.props.navigation.state.params.uri}}/>
  //         {this.props.navigation.state.params.map((obj, i) => {
  //           return (
  //             <Image key={i} style={{height:50, width:200}} resizeMode='contain' source={{uri:obj.uri}}/>
  //           )
  //         })}
  //         <Text onPress={()=>this.props.toScreen('Carts')}>I'm the Previews component</Text>
  //       </ScrollView>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    // justifyContent:'center',
    // alignItems:'center',
  },
  button : {
    position: 'absolute',
    width: width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:0,
    backgroundColor: '#dae9ef'
  },
  size : {
    backgroundColor:'#f7355d',
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    margin:10
  }
});
