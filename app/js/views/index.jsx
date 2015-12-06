'use strict;'
const React = require('react');
const Header = require('./header.jsx');
const SearchButton = require('./searchButton.jsx');
const ModalButton = require('./modalButton.jsx');
const Table = require('./table.jsx');
const Modal = require('./modal.jsx');

module.exports = React.createClass({
  render() {
    return (
      <div className='appContainer'>
        <Header/>
        <SearchButton/>
        <ModalButton/>
        <Table/>
        <div className='footer'>
          <hr/>
        </div>
        <Modal/>
      </div>
    );
  },
});
