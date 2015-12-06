const React = require('react');
const Header = require('./header.jsx');
const SearchButton = require('./searchButton.jsx');
const AddButton = require('./addButton.jsx');
const Table = require('./table.jsx');
const Modal = require('./modal.jsx');

module.exports = React.createClass({
  render() {
    return (
      <div className='appContainer'
        <Header/>
        <SearchButton/>
        <AddButton/>
        <Table/>
        <hr/>
        <Modal/>
      </div>
    );
  },
});
