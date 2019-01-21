import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailsPanel from '../containers/DetailsPanel';
import ExpenseTable from '../containers/ExpenseTable';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';


class Expenses extends Component {
  handleClickAdd = () => {
    const { dispatch } = this.props;

    dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
  }

  render() {
    return (
      <DetailsPanel
        table={<ExpenseTable />}
        handleClickAdd={this.handleClickAdd}
      />
    );
  }
}

Expenses.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Expenses;
