import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditTransactionDialog from '../components/EditTransactionDialog';
import { deleteTransaction, updateTransaction } from '../actions/budgets';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (data, successCallback, errorCallback) => {
    dispatch(updateTransaction(data, successCallback, errorCallback));
  },
  handleDelete: (pk, successCallback, errorCallback) => {
    dispatch(deleteTransaction(pk, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditTransactionDialog));
