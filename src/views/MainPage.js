import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LoginForm from './Login';
import Navigation from './Navigation';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class Login extends Component {
  renderInitialView() {
    const {isLogin} = this.props;
    
    switch (isLogin) {
      case true:
        return <Navigation/>
        
      default:
        return (
          <View style={style.container}>
            <LoginForm/>
          </View>  
          )
    }
  }

  render() {
    return (
        <Fragment>
          { this.renderInitialView() }
        </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { isLogin } = state;

  return { isLogin };
}

export default connect(mapStateToProps, actions)(Login);