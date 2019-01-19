import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ExpenseTable from '../components/table/ExpenseTable';
import { toggleDialog } from '../actions/dialogs';
import { EDIT_BUDGET_CATEGORY_DIALOG } from '../components/EditBudgetCategoryDialog';


function convertToCategoryRows(budget) {
  const rows = [];
  const budgetCategories = budget.budget_categories;
  Object.values(budgetCategories).forEach((category) => {
    rows.push({
      pk: category.pk,
      group: budget.budget_category_groups[category.group].name,
      category: category.category,
      limit: parseFloat(category.limit),
      spent: parseFloat(category.spent),
    });
  });
  return rows;
}

const mapStateToProps = state => ({
  rows: convertToCategoryRows(state.selectedBudget.budget),
});

const mapDispatchToProps = dispatch => ({
  showEditDialog: (rowData) => {
    dispatch(toggleDialog(EDIT_BUDGET_CATEGORY_DIALOG, rowData));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExpenseTable));
