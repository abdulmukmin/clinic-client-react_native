import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MKTextField, MKColor, MKButton, MKCheckbox } from 'react-native-material-kit';
import DatePicker from 'react-native-datepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-material-dropdown';
import * as action from '../actions';

const style = StyleSheet.create({
  form: {
    marginLeft: 20,
    justifyContent: 'space-between',
    width: 350,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  rowArea: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

const IdentityField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Identity Number (NIK)')
  .build()

const NameField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Name')
  .build()

const PlaceOfBrithField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Place of Brith')
  .build()

const IdentityAddressField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Identity Address')
  .build()

const DomicileAddressField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Domicile Address')
  .build()

const OccupationField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Occupation')
  .build()

const NationalityField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Nationality')
  .build()

const IdentityCreatedPlaceField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('IdentityCreatedPlace')
  .build()

const SaveButton = MKButton
  .coloredButton()
  .withText('Save')
  .build()

class AddPatient extends Component {
  constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {
      religion: '',
      date: new Date()
    }
  }
  
  render() {
    return (
      <ScrollView>
        <View style={style.form}>
          <Text style={style.title}>Add New Patient</Text>
          <IdentityField />
          <NameField />
          <PlaceOfBrithField />
          <View style={{marginTop: 10}}>
            <Text style={{marginRight: 7}}>Date of Brith</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              maxDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>
          <IdentityAddressField />
          <View style={style.rowArea}>
            <MKCheckbox
              checked={true}
            />
            <Text>Identity address same with domicile address</Text>
          </View>
          <DomicileAddressField />
          <Dropdown
            label="Religion" 
            data={[{value: 'Islam'}, {value: 'Hinduism'}, {value: 'Buddhism'}, {value: 'Christian'}, {value: 'Protestant'}, {value: 'Catholic'}, {value: 'Confucius'}]}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={{marginRight: 7}}>Marital Status</Text>
              <RadioGroup radioButtons={[{label: 'Single'}, {label: 'Married'}, {label: 'Other'}]} flexDirection={'row'}/>
          </View>
          <OccupationField />
          <NationalityField />
          <View style={{marginTop: 10}}>
            <Text style={{marginRight: 7}}>Identity Created Date</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              maxDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{marginRight: 7}}>Identity Valid Until</Text>
            <DatePicker
              style={{width: 200, marginBottom: 10}}
              date={this.state.date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-1900"
              maxDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </View>          
          <SaveButton />
        </View>
      </ScrollView>
    )
  }
}

export default connect(null, null)(AddPatient);