import React from 'react';

module.exports = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    return (
      <div className='search'>
        <input type ='text' placeholder='Search' className='search-input' value={this.state.value} onChange={this.handleChange}/>
        <button type="button" className='right-button'>
          <span className='fa fa-search'></span>
        </button>
      </div>
    );
  },
});
