import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Expenses from '../components/Expenses';


const mapStateToProps = state => ({
  budgets: state.budgets,
  selectedBudget: state.selectedBudget,
});

export default withRouter(connect(mapStateToProps)(Expenses));
