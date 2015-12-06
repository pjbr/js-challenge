const React = require('react');

module.exports = React.createClass({
  propTypes: {
    handleClick: React.PropTypes.func.isRequired,
  },
  render() {
    return (
      <button type="button" className='modal-button' onClick={this.props.handleClick}>
        <span className='fa fa-plus-circle'></span>  &nbsp;Contacts Keeper
      </button>
    );
  },
});
