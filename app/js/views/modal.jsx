const React = require('react');

module.exports = React.createClass({
  propTypes: {
    modalShow: React.PropTypes.string.isRequired,
    handleToggle: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      firstname: '',
      lastname: '',
      dob: '',
      phone: '',
      email: '',
      notes: '',
    };
  },
  handleFirstnameChange: function(event){
    this.setState({
      firstname: event.target.value
    });
  },
  handleLastnameChange: function(event){
    this.setState({
      lastname: event.target.value
    });
  },
  handleDOBChange: function(event){
    this.setState({
      dob: event.target.value
    });
  },
  handlePhoneChange: function(event){
    this.setState({
      phone: event.target.value
    });
  },
  handleEmailChange: function(event){
    this.setState({
      email: event.target.value
    });
  },
  handleNotesChange: function(event){
    this.setState({
      notes: event.target.value
    });
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
                <input type='text'onChange={this.handleFirstnameChange} value={this.state.firstname}/>
              </div>
              <div className='form-group'>
                <label> Last Name </label>
                <input type='text'onChange={this.handleLastnameChange} value={this.state.lastname}/>
              </div>
              <div className='form-group'>
                <label> Date of Birth </label>
                <input type='text'onChange={this.handleDOBChange} value={this.state.dob}/>
              </div>
              <div className='form-group'>
                <label> Phone Number </label>
                <input type='text'onChange={this.handlePhoneChange} value={this.state.phone}/>
              </div>
              <div className='form-group'>
                <label> Email </label>
                <input type='text'onChange={this.handleEmailChange} value={this.state.email}/>
              </div>
              <div className='form-group wide'>
                <label> Notes </label>
                <textarea onChange={this.handleNotesChange} value={this.state.notes}/>
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
