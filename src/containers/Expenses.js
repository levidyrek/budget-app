import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Expenses from '../components/Expenses';
import { copyBudget } from '../actions/budgets';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  copyBudget: (source, targetYear, targetMonth, successCallback, errorCallback) => {
    dispatch(copyBudget(source, targetYear, targetMonth, successCallback, errorCallback));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Expenses));
