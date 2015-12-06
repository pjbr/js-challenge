const css = require("./scss/styles.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import View from './js/views/index.jsx';
const container = document.getElementById('content');

//import Redux from 'Redux'
import redux from 'redux'
import reactRedux from 'react-redux';

import { appReducer } from './js/redux/reducer'
const store = redux.createStore(appReducer);
var Provider = reactRedux.Provider

ReactDOM.render((
  <Provider store={store}>
      <View/>
  </Provider>
), container);
