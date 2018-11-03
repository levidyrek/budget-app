import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import DetailsPanel from '../containers/DetailsPanel';
import { fetchBudgets, fetchSelectedBudget } from '../actions/budgets';
import BudgetTable from '../containers/BudgetTable';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';


export default class Expenses extends Component {
    handleClickAdd = (event) => {
      this.props.dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
    }

    render() {
      return (
        (!this.checkIfLoading()
                && (
                <DetailsPanel
                  table={<BudgetTable />}
                  handleClickAdd={this.handleClickAdd}
                />
                ))
            || <ReactLoading type="bars" color="#444" />
      );
    }

    UNSAFE_componentWillMount() {
      this.fetchDataIfNeeded();
    }

    componentDidUpdate() {
      this.fetchDataIfNeeded();
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
}
