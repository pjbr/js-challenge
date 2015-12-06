const css = require("./scss/styles.scss");
const React = require('react');
const ReactDOM = require('react-dom');
const View = require('./js/views/index.jsx')
const container = document.getElementById('content');
const redux = require('redux');



ReactDOM.render((
    <View/>
), container);
