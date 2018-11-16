import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MonthPicker from '../components/MonthPicker';
import { fetchSelectedBudget } from '../actions/budgets';


const mapStateToProps = state => ({
  budgets: state.budgets,
});

const mapDispatchToProps = dispatch => ({
  changeMonth: (month, year) => {
    dispatch(fetchSelectedBudget(month, year));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MonthPicker));
