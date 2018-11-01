import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddBudgetCategoryDialog from '../components/AddBudgetCategoryDialog';
import { ADD_BUDGET_CATEGORY_DIALOG } from '../components/AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';
import { addBudgetCategory } from '../actions/budgets';


const mapStateToProps = state => ({
  budget: state.selectedBudget.budget,
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
