// /* @flow */
//
// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
// } from 'react-native';
//
// export default class Completed extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text onPress={()=> this.props.toScreen('DetailTransactionHistories')}>I'm the Completed component</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Card, CardItem, Body, Thumbnail, Left, Right } from 'native-base';
import CustomNavbar from '../../components/CustomNavbar'

export default class Completed extends Component {

  _keyExtractor = (item, index) => index;

  _renderItem = ({item}) => (
    <Card>
      <ListItem style={{borderWidth:0}} avatar onPress={()=> this.props.toScreen('DetailTransactionHistories')}>
        <Left>
          <Thumbnail small source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
        </Left>
        <Body style={{borderBottomWidth:0}}>
          <Text style={{color:'green'}}>Selesai</Text>
        </Body>
        <Right style={{borderBottomWidth:0}}>
          <Text note>13 Jan, 3:43 pm</Text>
        </Right>
      </ListItem>
      <ListItem onPress={()=> this.props.toScreen('DetailTransactionHistories')}>
         <Text note>PT. ADITAMA RAYA Jl. Sindang Laut No. 60 JAKARTA PUSAT</Text>
       </ListItem>
    </Card>
  );

  render() {
    return (
      <Container>
           <View style={styles.container}>
             <FlatList
                data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />
          </View>
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    padding: 5
  },
});
