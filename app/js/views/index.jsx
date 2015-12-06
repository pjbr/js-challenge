'use strict;'
import React from 'react';
import Header from './header.jsx';
import SearchButton from './searchButton.jsx';
import ModalButton from './modalButton.jsx';
import Table from './table.jsx';
import Modal from './modal.jsx';

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
  getInitialState: function(){
    return {
      modal_show: 'hide',
      body_modal_class: ''
    };
  },
  handleContactSubmit: function(){

  },
  render() {
    return (
      <div className={'page ' + this.state.body_modal_class}>
        <div className='page-wrap'>
          <Header/>
          <SearchButton/>
          <ModalButton handleClick={this.handleModalToggle}/>
          <Table/>
          <Modal modalShow={this.state.modal_show} handleToggle={this.handleModalToggle} onContactSubmit={this.handleContactSubmit}/>
        </div>
        <div className='footer'>
          <hr/>
        </div>
      </div>
    );
  },
});
