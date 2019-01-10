import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';

import DetailsPanel from '../containers/DetailsPanel';
import { fetchBudgets, fetchSelectedBudget } from '../actions/budgets';
import BudgetTable from '../containers/BudgetTable';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';


class Expenses extends Component {
  constructor(props) {
    super(props);
    this.fetchDataIfNeeded();
  }

  componentDidUpdate() {
    this.fetchDataIfNeeded();
  }

  handleClickAdd = () => {
    const { dispatch } = this.props;

    dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
  }

  checkIfLoading() {
    const { budgets, selectedBudget } = this.props;

    return budgets.fetching || !budgets.items
      || selectedBudget.fetching || !selectedBudget.budget;
  }

  fetchDataIfNeeded() {
    const { budgets, selectedBudget, dispatch } = this.props;

    // If budgets are have not been fetched or are being fetched, fetch them.
    if (!budgets.fetching && !budgets.items) {
      dispatch(fetchBudgets());
    } else if (budgets.items && !selectedBudget.fetching && selectedBudget.invalidated) {
      // If budgets have been fetched, but selected budget hasn't been, fetch it.
      dispatch(fetchSelectedBudget(selectedBudget.month, selectedBudget.year));
    }
  }

  render() {
    return (
      (
        !this.checkIfLoading()
        && (
          <DetailsPanel
            table={<BudgetTable />}
            handleClickAdd={this.handleClickAdd}
          />
        )
      )
      || <ReactLoading type="bars" color="#444" />
    );
  }
}

Expenses.propTypes = {
  budgets: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  selectedBudget: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    invalidated: PropTypes.bool.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Expenses;
