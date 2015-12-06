const css = require("./scss/styles.scss");
const React = require('react');
const ReactDOM = require('react-dom');
const {Table, Column, Cell} = require('fixed-data-table');
const View = require('./js/views/index.jsx')
const container = document.getElementById('content');


ReactDOM.render((
  <div>
    <View/>
    <hr/>
  </div>
), container);
