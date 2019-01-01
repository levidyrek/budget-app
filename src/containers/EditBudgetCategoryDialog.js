import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditBudgetCategoryDialog, { EDIT_BUDGET_CATEGORY_DIALOG } from '../components/EditBudgetCategoryDialog';
import { deleteBudgetCategory, updateBudgetCategory } from '../actions/budgets';

const mapStateToProps = state => ({
  dialogState: state.dialogs[EDIT_BUDGET_CATEGORY_DIALOG],
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data, successCallback, errorCallback) => {
    dispatch(updateBudgetCategory(data, successCallback, errorCallback));
  },
  handleDelete: (pk, successCallback, errorCallback) => {
    dispatch(deleteBudgetCategory(pk, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBudgetCategoryDialog));
