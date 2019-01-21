import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailsPanel from '../containers/DetailsPanel';
import TransactionTable from '../containers/TransactionTable';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';


class Transactions extends Component {
  handleClickAdd = () => {
    const { dispatch } = this.props;

    dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
  }

  render() {
    return (
      <DetailsPanel
        table={<TransactionTable />}
        handleClickAdd={this.handleClickAdd}
      />
    );
  }
}

Transactions.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Transactions;
