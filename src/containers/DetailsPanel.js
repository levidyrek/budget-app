import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DetailsPanel from '../components/DetailsPanel';
import { fetchBudgets, fetchSelectedBudget } from '../actions/budgets';


const mapStateToProps = state => ({
  budgets: state.budgets,
  mobileMode: state.mobileMode,
  selectedBudget: state.selectedBudget,
});

const mapDispatchToProps = dispatch => ({
  fetchBudgets: () => dispatch(fetchBudgets()),
  fetchSelectedBudget: (month, year) => fetchSelectedBudget(month, year),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsPanel));
