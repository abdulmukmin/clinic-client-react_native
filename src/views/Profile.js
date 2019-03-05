import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import * as action from '../actions';
import { connect } from 'react-redux';

class Profile extends Component {

  logoutClicked() {
    this.props.logoutUser();
  }

  render() {
    let { employeeName, jobPosition } = this.props;
    return (
      <View style={{marginLeft: 10}}>
        <Text style={{marginTop: 10, fontSize: 30, textAlign: 'center'}}>My Profile</Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{width: 75}}>Name:</Text>
          <Text>{employeeName}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{width: 75}}>Job title:</Text>
          <Text>{jobPosition}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
          <Button 
            title={'Logout'}
            onPress={this.logoutClicked.bind(this)}
            color={'red'}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { employeeName, jobPosition } = state;

  return { employeeName, jobPosition }
}

export default connect(mapStateToProps, action)(Profile);