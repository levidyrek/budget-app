import React, { Component } from 'react';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import { moneyRenderer } from '../../utils/renderers';
import { moneySorter } from '../../utils/sorters';
import BaseTable from './BaseTable';


class ExpenseTable extends Component {
  columns = [
    {
      accessor: 'pk',
      show: false,
    },
    {
      accessor: 'group',
      Header: 'Group',
    },
    {
      accessor: 'category',
      Header: 'Category',
    },
    {
      accessor: 'limit',
      className: 'money',
      Header: 'Limit',
      Cell: moneyRenderer,
      sortMethod: moneySorter,
    },
    {
      accessor: 'spent',
      className: 'money',
      Header: 'Spent',
      Cell: moneyRenderer,
      sortMethod: moneySorter,
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
          id: 'group',
        }]}
        noDataText="No categories found"
      />
    );
  }
}

ExpenseTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditDialog: PropTypes.func.isRequired,
};

export default ExpenseTable;
