import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DetailsPanel from '../components/DetailsPanel';


const mapStateToProps = state => ({
  budgets: state.budgets,
  mobileMode: state.mobileMode,
  selectedBudget: state.selectedBudget,
});

export default withRouter(connect(mapStateToProps)(DetailsPanel));
