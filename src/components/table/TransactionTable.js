import React, { Component } from 'react';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import BaseTable from './BaseTable';
import { moneyRenderer } from '../../utils/renderers';
import EditTransactionDialog from '../../containers/EditTransactionDialog';


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

  constructor(props) {
    super(props);
    this.state = {
      editDialogOpen: false,
      editData: null,
    };
  }

  handleRowClick = (rowData) => {
    this.setState({
      editDialogOpen: false,
      editData: rowData,
    });
  }

  handleCloseEdit = () => {
    this.setState({
      editDialogOpen: false,
    });
  }

  render() {
    const { rows, showEditDialog } = this.props;
    const { editData, editDialogOpen } = this.state;

    return (
      <div>
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
        <EditTransactionDialog
          open={editDialogOpen}
          handleClose={this.handleCloseEdit}
          editData={editData}
        />
      </div>
    );
  }
}

TransactionTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  showEditDialog: PropTypes.func.isRequired,
};

export default TransactionTable;
