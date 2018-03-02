/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux'
import { Spinner } from 'native-base'

const ModalOverlay = (props) => (
  <View style={styles.container}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.showOverlay}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <View style={styles.modalContainer}>
        <Spinner/>
      </View>
    </Modal>
  </View>
);
const mapStateToProps = state => {
  return {
    showOverlay: state.modalOverlay
  }
}

export default connect(mapStateToProps)(ModalOverlay);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000036',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
