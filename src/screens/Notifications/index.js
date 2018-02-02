/* @flow */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Card, CardItem, Body, Thumbnail, Left, Right, Icon } from 'native-base';
import CustomNavbar from '../../components/CustomNavbar'

export default class Notifications extends Component {

  _keyExtractor = (item, index) => index;

  _renderItem = ({item}) => (
    <Card>
    <ListItem avatar>
      <Left>
        <Thumbnail source={{ uri: 'https://www.allamericanspa.co.uk/wp-content/uploads/2017/02/profile-pictures.png' }} />
      </Left>
      <Body>
        <Text>Tagihan no. AB123XZ</Text>
        <Text note numberOfLines={1} ellipsizeMode='tail'>Batas pembayaran tagihan transaksi AB123XZ tinggal beberapa jam lagi</Text>
      </Body>
      <Right>
        <Text note>3:43 pm</Text>
      </Right>
    </ListItem>
    </Card>
  );

  render() {

    const rightComponent = (
      <TouchableOpacity style={{padding:10}}>
        <Icon name="md-funnel" style={{color:'#fff'}}/>
      </TouchableOpacity>
    )
    
    return (
      <Container>
         <CustomNavbar
            title="Notifications"
            rightComponent={rightComponent}
         />
           <View style={styles.container}>
             <FlatList
                data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}]}
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
    backgroundColor: "#fff",
    padding: 5
  },
});
