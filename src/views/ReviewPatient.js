import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, Button, View, Alert, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  dataField: {
    width: 150
  }
})

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    let {NIK, name, placeOfBrith, dateOfBrith, identityAddress, domicileAddress, religion, maritalStatus, occupation, nationality, identityCreatedDate, identityValidDate} = this.props.data;
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <Text style={styles.title}>Review Patient Data</Text>
          <View style={{marginTop: 22, marginLeft: 10}}>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Identity ID (NIK KTP)</Text>
              <Text>: {NIK}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Name</Text>
              <Text>: {name}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Place of Brith</Text>
              <Text>: {placeOfBrith}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Date of Brith</Text>
              <Text>: {dateOfBrith}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Identity Address</Text>
              <Text>: {identityAddress}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Domicile Address</Text>
              <Text>: {domicileAddress}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Religion</Text>
              <Text>: {religion}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Marital Status</Text>
              <Text>: {maritalStatus}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Occupation</Text>
              <Text>: {occupation}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Nationality</Text>
              <Text>: {nationality}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Identity Created Date</Text>
              <Text>: {identityCreatedDate}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.dataField}>Identity Valid Date</Text>
              <Text>: {identityValidDate}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
              <Button
                title="Save and Reserv"
                onPress={this.props.save}
              />
              <Button
                title="Cancel"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
            </View>
          </View>
        </Modal>

        <Button
          title="Save"
          onPress={() => {
            this.setModalVisible(true);
          }} 
        />
      </View>
    );
  }
}

mapStateToProps = (state) => {
  let { modalReview } = state;

  return { modalReview };
}

export default connect(mapStateToProps, null)(ModalExample);