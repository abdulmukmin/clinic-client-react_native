import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MKTextField, MKColor, MKButton, MKCheckbox } from 'react-native-material-kit';
import DatePicker from 'react-native-datepicker';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-material-dropdown';
import * as actions from '../actions';

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

const IdentityNIKField = MKTextField.textfieldWithFloatingLabel()
  .withPlaceholder('Identity Number (NIK)')
  .withKeyboardType('numeric')
  .withTextInputStyle({flex: 1})
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

const SaveButton = MKButton
  .coloredButton()
  .withText('Save')
  .build()

class AddPatient extends Component {
  //set value in state for initial date
  state = {
    isSeumurHidupValidity: true,
    isAddressSame: true,

    //patient identity
    NIK: '',
    name: '',
    placeOfBrith: '',
    dateOfBrith: null,
    identityAddress: '',
    domicileAddress: '',
    religion: '',
    allMaritalStatus: [{label: 'Single', value: 'single'}, {label: 'Married', value: 'married'}, {label: 'Other', value: 'other'}],
    maritalStatus: 'single',
    occupation: '',
    nationality: '',
    identityCreatedDate: null,
    identityValidDate: 'Seumur hidup',
  }

  saveProcess() {
    const {NIK, name, placeOfBrith, dateOfBrith, identityAddress, domicileAddress, religion, maritalStatus, occupation, nationality, identityCreatedDate, identityValidDate} = this.state;
    this.props.saveNewPatient({ NIK, name, placeOfBrith, dateOfBrith, identityAddress, domicileAddress, religion, maritalStatus, occupation, nationality, identityCreatedDate, identityValidDate});
  }

  religionDropdownHandler = (religion) => {
    this.setState({religion})
  }

  maritalRadioButtonHandler = (allMaritalStatus) =>{
    this.setState({allMaritalStatus})
    let maritalStatus = this.state.allMaritalStatus.find(e => e.selected == true);
    this.setState({maritalStatus: maritalStatus.value})
  }

  insertDomicileAddress = () => {
    if(!this.state.isAddressSame) {
      return (
        <DomicileAddressField 
          value={this.state.domicileAddress}
          onTextChange={domicileAddress => this.setState({domicileAddress})}
        />
      )
    } else {
      return (
        <DomicileAddressField 
          value={this.state.domicileAddress}
          editable={false}
        />
      )
    }
  }

  seumurHidupClicked = () => {
    this.state.isSeumurHidupValidity ? 
    this.setState({isSeumurHidupValidity: false, identityValidDate: ''}) : 
    this.setState({isSeumurHidupValidity: true, identityValidDate: 'Seumur hidup'})
  }

  identityValidDate() {
    if(!this.state.isSeumurHidupValidity) {
      return (
        <DatePicker
          style={{width: 200, marginBottom: 10}}
          date={this.state.identityValidDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="MM-DD-YYYY"
          minDate={new Date()}
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
          onDateChange={(identityValidDate) => {this.setState({identityValidDate})}}
        />
      )
    }
  }

  filledIdentityAddress = (identityAddress) => {
    this.state.isAddressSame ?
    this.setState({identityAddress, domicileAddress: identityAddress}) :
    this.setState({identityAddress})
  }

  isAddressSameClicked = () => {
    this.state.isAddressSame ?
    this.setState({isAddressSame: false, domicileAddress: ''}) :
    this.setState({isAddressSame: true, domicileAddress: this.state.identityAddress})
  }
  
  render() {
    return (
      <ScrollView>
        <View style={style.form}>
          <Text style={style.title}>Add New Patient</Text>
          <IdentityNIKField 
            value={this.state.NIK}
            onTextChange={NIK => this.setState({ NIK })}
          />
          <NameField 
            value={this.state.name}
            onTextChange={name => this.setState({ name })}
          />
          <PlaceOfBrithField 
            value={this.state.placeOfBrith}
            onTextChange={placeOfBrith => this.setState({ placeOfBrith })}
          />
          <View style={{marginTop: 10}}>
            <Text style={{marginRight: 7}}>Date of Brith</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.dateOfBrith} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="MM-DD-YYYY"
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
              onDateChange={dateOfBrith => {this.setState({dateOfBrith: new Date(dateOfBrith)})}}
            />
          </View>
          <IdentityAddressField 
            value={this.state.identityAddress}
            onTextChange={this.filledIdentityAddress}
          />
          <View style={style.rowArea}>
            <MKCheckbox
              checked={true}
              onCheckedChange={this.isAddressSameClicked}
            />
            <Text>Identity address same with domicile address</Text>
          </View>
          {this.insertDomicileAddress()}
          <Dropdown
            label="Religion" 
            data={[{value: 'Islam'}, {value: 'Hinduism'}, {value: 'Buddhism'}, {value: 'Christian'}, {value: 'Protestant'}, {value: 'Catholic'}, {value: 'Confucius'}]}
            onChangeText={this.religionDropdownHandler}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={{marginRight: 7}}>Marital Status</Text>
              <RadioGroup 
                radioButtons={this.state.allMaritalStatus} flexDirection={'row'}
                onPress={this.maritalRadioButtonHandler}
              />
          </View>
          <OccupationField 
            value={this.state.occupation}
            onTextChange={occupation => this.setState({occupation})}
          />
          <NationalityField 
            value={this.state.nationality}
            onTextChange={nationality => this.setState({nationality})}
          />
          <View style={{marginTop: 10}}>
            <Text style={{marginRight: 7}}>Identity Created Date</Text>
            <DatePicker
              style={{width: 200}}
              date={this.state.identityCreatedDate} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="MM-DD-YYYY"
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
              onDateChange={(date) => {this.setState({identityCreatedDate: new Date(date)})}}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{marginRight: 7}}>Identity Valid Until</Text>
            <View style={style.rowArea}>
              <MKCheckbox
                checked={true}
                onCheckedChange={this.seumurHidupClicked}
              />
              <Text>Seumur hidup</Text>
            </View>
            { this.identityValidDate() }
          </View>          
          <SaveButton 
            onPress={this.saveProcess.bind(this)}
          />
        </View>
      </ScrollView>
    )
  }
}

export default connect(null, actions)(AddPatient);