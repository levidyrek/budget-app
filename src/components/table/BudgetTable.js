import React, { Component } from 'react';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import { moneyRenderer } from '../../utils/renderers';
import BaseTable from './BaseTable';


class BudgetTable extends Component {
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
    },
    {
      accessor: 'spent',
      className: 'money',
      Header: 'Spent',
      Cell: moneyRenderer,
    },
  ];

  render() {
    const { rows, showEditDialog } = this.props;

    return (
      <BaseTable
        rows={rows}
        columns={this.columns}
        handleRowClick={showEditDialog}
      />
    );
  }
}

BudgetTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditDialog: PropTypes.func.isRequired,
};

export default BudgetTable;
