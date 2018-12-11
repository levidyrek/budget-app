import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditBudgetCategoryDialog from '../components/EditBudgetCategoryDialog';
import { addBudgetCategory } from '../actions/budgets';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data, successCallback, errorCallback) => {
    dispatch(addBudgetCategory(data, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBudgetCategoryDialog));
