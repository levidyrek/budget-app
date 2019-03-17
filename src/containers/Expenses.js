import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Expenses from '../components/Expenses';
import { copyBudget } from '../actions/budgets';
import { toggleDialog } from '../actions/dialogs';

const mapStateToProps = state => ({
  year: state.selectedBudget.year,
  month: state.selectedBudget.month,
});

const mapDispatchToProps = dispatch => ({
  copyBudget: (targetYear, targetMonth, successCallback, errorCallback) => {
    dispatch(copyBudget(targetYear, targetMonth, successCallback, errorCallback));
  },
  toggleDialog: (dialogName) => {
    dispatch(toggleDialog(dialogName));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Expenses));
