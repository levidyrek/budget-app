import { connect } from 'react-redux';
import AddBudgetCategoryDialog from '../components/AddBudgetCategoryDialog';
import { fetchSelectedBudget } from '../actions/budgets';
import { ADD_BUDGET_CATEGORY_DIALOG } from '../components/AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';
import { addBudgetCategory } from '../actions/budgets';


const mapStateToProps = state => {
    return {
        budget: state.selectedBudget.budget,
        open: state.dialogs[ADD_BUDGET_CATEGORY_DIALOG]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClose: () => {
            dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
        },
        handleSubmit: (data) => {
            dispatch(addBudgetCategory(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBudgetCategoryDialog);