import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';
import {connect} from 'react-redux';

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    state
  }
}

class TextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class EmailCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={'mailto:'+link}>{link}</a>
      </Cell>
    );
  }
}
const MyTable =  React.createClass ({
  propTypes: {
    state: React.PropTypes.any.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  },

  render() {
    return (
      <div className='table'>
      <Table
        rowsCount={this.props.state.contacts.length}
        rowHeight={30}
        headerHeight={30}
        width={1000}
        maxHeight={500}>
        <Column
          header={<Cell>First Name</Cell>}
          cell={
            <TextCell
              data={this.props.state.contacts}
              field="firstname"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Last Name</Cell>}
          cell={
            <TextCell
              data={this.props.state.contacts}
              field="lastname"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Date of Birth</Cell>}
          cell={
            <TextCell
              data={this.props.state.contacts}
              field="dob"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Phone</Cell>}
          cell={
            <TextCell
              data={this.props.state.contacts}
              field="phone"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={
            <EmailCell
              data={this.props.state.contacts}
              field="email"
            />
          }
          width={300}
        />
        <Column
          header={<Cell>Notes</Cell>}
          cell={
            <TextCell
              data={this.props.state.contacts}
              field="notes"
            />
          }
          width={300}
        />
      </Table>
      </div>
    );
  }
});

export default connect(select)(MyTable)
