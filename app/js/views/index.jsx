'use strict;'
const React = require('react');
const Header = require('./header.jsx');
const SearchButton = require('./searchButton.jsx');
const ModalButton = require('./modalButton.jsx');
const Table = require('./table.jsx');
const Modal = require('./modal.jsx');

module.exports = React.createClass({
  handleModalToggle: function(){
    if('hide' === this.state.modal_show){
      this.setState({
        modal_show: '',
        body_modal_class: 'modal-active',
      })
    } else {
      this.setState({
        modal_show: 'hide',
        body_modal_class: '',
      })
    }
  },
  getInitialState: function() {
    return {
      modal_show: 'hide',
      body_modal_class: ''
    };
  },
  render() {
    return (
      <div className={'page ' + this.state.body_modal_class}>
        <div className='page-wrap'>
          <Header/>
          <SearchButton/>
          <ModalButton handleClick={this.handleModalToggle}/>
          <Table/>
          <Modal modalShow={this.state.modal_show} handleToggle={this.handleModalToggle}/>
        </div>
        <div className='footer'>
          <hr/>
        </div>
      </div>
    );
  },
});
