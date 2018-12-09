import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BudgetCategoryDialog from '../components/BudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';


const mapStateToProps = state => ({
  budget: state.selectedBudget.budget,
  year: state.selectedBudget.year,
  month: state.selectedBudget.month,
});

const mapDispatchToProps = dispatch => ({
  handleClose: (dialogName) => {
    dispatch(toggleDialog(dialogName));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BudgetCategoryDialog));
