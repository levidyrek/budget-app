import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MonthPicker from '../components/MonthPicker';
import { fetchSelectedBudget } from '../actions/budgets';


const mapStateToProps = state => ({
  budgets: state.budgets,
});

const mapDispatchToProps = dispatch => ({
  changeMonth: (month, url) => {
    dispatch(fetchSelectedBudget(month, url));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MonthPicker));
