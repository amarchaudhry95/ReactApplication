import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/
        react-bootstrap-table.css'
 

const rowClassNameFormat = (row, rowIdx) => {
    // row is whole row object
    // rowIdx is index of row
    console.log(row)
    return row['colour'];
}        
 
class Table extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} trClassName={rowClassNameFormat}>
          <TableHeaderColumn isKey dataField='company'>
            Company
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'>
            Share Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='time'>
            Last Updated
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table;