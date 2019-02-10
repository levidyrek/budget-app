import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddTransactionDialog from '../components/AddTransactionDialog';
import { addTransaction } from '../actions/budgets';


const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (transaction, successCallback, errorCallback) => {
    dispatch(addTransaction(transaction, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddTransactionDialog));
