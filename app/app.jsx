const css = require("./scss/styles.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import View from './js/views/index.jsx';
const container = document.getElementById('content');

//import Redux from 'Redux'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {appReducer} from './js/redux/reducer'
const store = createStore(appReducer);

ReactDOM.render((
  <Provider store={store}>
      <View/>
  </Provider>
), container);
