const React = require('react');

module.exports = React.createClass({
  propTypes: {
    modalShow: React.PropTypes.string.isRequired,
    handleToggle: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div className={'modal-show '+this.props.modalShow}>
        <div className='modal-backdrop'>
        </div>
        <div className='modal'>
          <div className='modal-header'>
            <span className='title'> Contacts Keeper </span>
            <span className='modal-close' onClick={this.props.handleToggle}>
              ×
            </span>
          </div>
          <form>
            <div className='modal-body'>
              <div className='form-group'>
                <label> First Name </label>
                <input type='text'/>
              </div>
              <div className='form-group'>
                <label> Last Name </label>
                <input type='text'/>
              </div>
              <div className='form-group'>
                <label> Date of Birth </label>
                <input type='text'/>
              </div>
              <div className='form-group'>
                <label> Phone Number </label>
                <input type='text'/>
              </div>
              <div className='form-group'>
                <label> Email </label>
                <input type='text'/>
              </div>
              <div className='form-group wide'>
                <label> Notes </label>
                <textarea />
              </div>
            </div>
            <div className='modal-footer'>
              <hr/>
              <button> Save </button>
            </div>
          </form>
        </div>
      </div>
    );
  },
});
