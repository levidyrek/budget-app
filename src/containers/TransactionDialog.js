import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TransactionDialog from '../components/TransactionDialog';


const mapStateToProps = state => ({
  budget: state.selectedBudget.budget,
  mobileMode: state.mobileMode,
});

export default withRouter(connect(mapStateToProps)(TransactionDialog));
