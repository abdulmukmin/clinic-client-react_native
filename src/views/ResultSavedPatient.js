import React, {Component} from 'react';
import {Modal, Text, Button, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions'; 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  dataField: {
    width: 150
  }
})

class ModalResult extends Component {
  closeModalResult() {
    this.props.hideSavedPatient()
  }

  
  render() {
    let {currMonth, currYear, MRD, name, domicileAddress} = this.props;
    return (
      <Modal
        transparent={true}
        visible={this.props.modalResult}
      >
        <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
          <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
            <Text style={styles.title}>
              Patient Data Saved!
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dataField}>Medical Record Number</Text>
              <Text>: {MRD}</Text>          
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dataField}>Patient Name</Text>
              <Text>: {name}</Text>          
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dataField}>Patient Domicile Address</Text>
              <Text>: {domicileAddress}</Text>          
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dataField}>Patient Age</Text>
              <Text>: {currYear} tahun {currMonth} bulan </Text>          
            </View>
            <Button
              title="Close"
              style={{marginBottom: 10}}
              onPress={this.closeModalResult.bind(this)}
            />
          </View>
        </View>
      </Modal>
    )
  }
}

mapStateToProps = state => {
  let {currMonth, currYear, MRD, name, domicileAddress, modalResult} = state;

  return {currMonth, currYear, MRD, name, domicileAddress, modalResult}
}

export default connect(mapStateToProps, actions)(ModalResult);