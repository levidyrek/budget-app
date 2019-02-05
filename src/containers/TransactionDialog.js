import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TransactionDialog from '../components/TransactionDialog';
import { addTransaction } from '../actions/budgets';


const mapStateToProps = state => ({
  budget: state.selectedBudget.budget,
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (transaction, successCallback, errorCallback) => {
    dispatch(addTransaction(transaction, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionDialog));
