/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import Thunk from 'redux-thunk';
import MainPage from './src/views/MainPage';
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(Thunk))

export default class App extends Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <Provider store={store}>
          <MainPage />
      </Provider>
    );
  }
}
