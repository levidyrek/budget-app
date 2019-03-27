import React, { Component } from 'react';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import BaseTable from './BaseTable';
import { moneyRenderer } from '../../utils/renderers';
import { moneySorter } from '../../utils/sorters';
import EditTransactionDialog from '../../containers/EditTransactionDialog';


class TransactionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editData: null,
    };
  }

  getColumns = () => {
    const { categoryRenderer } = this.props;

    return [
      {
        accessor: 'pk',
        show: false,
      },
      {
        accessor: 'amount',
        Header: 'Amount',
        className: 'money',
        Cell: moneyRenderer,
        sortMethod: moneySorter,
      },
      {
        accessor: 'payee',
        Header: 'Payee',
      },
      {
        accessor: 'budget_category',
        Header: 'Category',
        Cell: categoryRenderer,
      },
      {
        accessor: 'date',
        Header: 'Date',
      },
    ];
  }

  handleRowClick = (rowData) => {
    this.setState({
      editData: {
        amount: parseFloat(rowData.amount),
        category: rowData.budget_category,
        date: rowData.date,
        payee: rowData.payee,
        pk: rowData.pk,
      },
    });
  }

  handleCloseEdit = () => {
    this.setState({
      editData: null,
    });
  }

  render() {
    const { rows } = this.props;
    const { editData } = this.state;

    return (
      <div>
        <BaseTable
          rows={rows}
          columns={this.getColumns()}
          handleRowClick={this.handleRowClick}
          defaultSorted={[{
            id: 'date',
          }]}
          noDataText="No transactions found"
        />
        {
          editData
          && (
            <EditTransactionDialog
              open
              handleClose={this.handleCloseEdit}
              initData={editData}
            />
          )
        }
      </div>
    );
  }
}

TransactionTable.propTypes = {
  categoryRenderer: PropTypes.func.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionTable;
