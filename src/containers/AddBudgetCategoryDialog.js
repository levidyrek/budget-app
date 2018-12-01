import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddBudgetCategoryDialog, { ADD_BUDGET_CATEGORY_DIALOG } from '../components/AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';
import { addBudgetCategory } from '../actions/budgets';


const mapStateToProps = state => ({
  budget: state.selectedBudget.budget,
  year: state.selectedBudget.year,
  month: state.selectedBudget.month,
});

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
  },
  handleSubmit: (data, successCallback, errorCallback) => {
    dispatch(addBudgetCategory(data, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddBudgetCategoryDialog));
