const React = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div className='search'>
        <input type ='text' placeholder='Search' className='search-input'/>
        <button type="button" className='right-button'>
          <span className='fa fa-search'></span>
        </button>
      </div>
    );
  },
});
