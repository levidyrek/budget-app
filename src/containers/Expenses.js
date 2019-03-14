import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Expenses from '../components/Expenses';
import { copyBudget } from '../actions/budgets';

const mapStateToProps = state => ({
  year: state.selectedBudget.year,
  month: state.selectedBudget.month,
});

const mapDispatchToProps = dispatch => ({
  copyBudget: (targetYear, targetMonth, successCallback, errorCallback) => {
    dispatch(copyBudget(targetYear, targetMonth, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Expenses));
