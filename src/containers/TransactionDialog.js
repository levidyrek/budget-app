import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TransactionDialog from '../components/TransactionDialog';
import { toggleDialog } from '../actions/dialogs';


const mapStateToProps = state => ({
  budget: state.selectedBudget.budget,
});

const mapDispatchToProps = dispatch => ({
  handleClose: (dialogName) => {
    dispatch(toggleDialog(dialogName));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionDialog));
