import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

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
class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {firstname: 'Rylan', lastname: 'Rylan', dob: 'Rylan', phone: 'Rylan', notes: 'Rylan',  email: 'Angelita_Weimann42@gmail.com'},
        {firstname: 'Amelia', lastname: 'Amelia', dob: 'Amelia', phone: 'Amelia', notes: 'Amelia',  email: 'Dexter.Trantow57@hotmail.com'},
        {firstname: 'Estevan', lastname: 'Estevan', dob: 'Estevan', phone: 'Estevan', notes: 'Estevan',  email: 'Aimee7@hotmail.com'},
        {firstname: 'Florence', lastname: 'Florence', dob: 'Florence', phone: 'Florence', notes: 'Florence',  email: 'Jarrod.Bernier13@yahoo.com'},
        {firstname: 'Tressa', lastname: 'Tressa', dob: 'Tressa', phone: 'Tressa', notes: 'Tressa',  email: 'Yadira1@hotmail.com'},
      ],
    };
  }

  render() {
    return (
      <div className='table'>
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={30}
        headerHeight={30}
        width={1000}
        maxHeight={500}>
        <Column
          header={<Cell>First Name</Cell>}
          cell={
            <TextCell
              data={this.state.myTableData}
              field="firstname"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Last Name</Cell>}
          cell={
            <TextCell
              data={this.state.myTableData}
              field="lastname"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Date of Birth</Cell>}
          cell={
            <TextCell
              data={this.state.myTableData}
              field="dob"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Phone</Cell>}
          cell={
            <TextCell
              data={this.state.myTableData}
              field="phone"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={
            <EmailCell
              data={this.state.myTableData}
              field="email"
            />
          }
          width={300}
        />
        <Column
          header={<Cell>Notes</Cell>}
          cell={
            <TextCell
              data={this.state.myTableData}
              field="notes"
            />
          }
          width={300}
        />
      </Table>
      </div>
    );
  }
}
module.exports = MyTable;
