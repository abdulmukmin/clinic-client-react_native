import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { MKTextField, MKButton, MKColor } from 'react-native-material-kit';
import Loader from '../views/Loader';
import * as actions from '../actions';

const style = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  field: {
    marginTop: 20,
    fontSize: 18,
    width: 200,
  }
})

const LoginButton = MKButton.coloredButton().withText('Login').build();

class Login extends Component {
  state = {
    NIK: null,
    password: '',
  }

  loginClicked() {
    const {NIK, password} = this.state;
    this.props.loginUser({NIK, password});
  }

  renderLoader() {
    if(this.props.loading) {
      return <Loader size='large' />
    } else {
      return (
        <LoginButton
          onPress={this.loginClicked.bind(this)}
          marginTop={20}
        />
      )
    }
  }

  render() {
    
    return (
      <View >
        <Text style={style.title}>Login</Text>
        <View style={style.field}>
          <MKTextField
            value={this.state.NIK}
            onTextChange={NIK => this.setState({ NIK })}
            placeholder={'Employee ID...'}
          />
          <MKTextField
            value={this.state.password}
            onTextChange={password => this.setState({ password })}
            placeholder={'Password...'}
            password={true}
          />
        </View>
          {this.renderLoader()}
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { NIK, password, error, loading } = state;

  return { NIK, password, error, loading };
}

export default connect(mapStateToProps, actions)(Login);