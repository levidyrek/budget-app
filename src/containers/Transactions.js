import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Transactions from '../components/Transactions';


const mapStateToProps = state => ({
  budgets: state.budgets,
  selectedBudget: state.selectedBudget,
});

export default withRouter(connect(mapStateToProps)(Transactions));
