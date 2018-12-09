import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddBudgetCategoryDialog from '../components/AddBudgetCategoryDialog';
import { addBudgetCategory } from '../actions/budgets';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data, successCallback, errorCallback) => {
    dispatch(addBudgetCategory(data, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddBudgetCategoryDialog));
