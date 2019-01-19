import React, { Component } from 'react';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import { moneyRenderer } from '../../utils/renderers';
import BaseTable from './BaseTable';


// TODO: Look into generalizing this and the ExpenseTable
class TransactionTable extends Component {
  columns = [
    {
      accessor: 'pk',
      show: false,
    },
    {
      accessor: 'amount',
      Header: 'Amount',
      className: 'money',
      Cell: moneyRenderer,
    },
    {
      accessor: 'payee',
      Header: 'Payee',
    },
    {
      accessor: 'budget_category',
      Header: 'Category',
    },
    {
      accessor: 'date',
      Header: 'Date',
    },
  ];

  render() {
    const { rows, showEditDialog } = this.props;

    return (
      <BaseTable
        rows={rows}
        columns={this.columns}
        handleRowClick={showEditDialog}
        defaultSorted={[{
          id: 'date',
        }]}
        // react-table does not support disabling pagination,
        // so set page size to number of rows and show 5 padding rows.
        defaultPageSize={rows.length}
        minRows={rows.length + 5}
        noDataText="No transactions found"
      />
    );
  }
}

TransactionTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditDialog: PropTypes.func.isRequired,
};

export default TransactionTable;
