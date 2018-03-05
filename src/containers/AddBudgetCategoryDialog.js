import { connect } from 'react-redux';
import AddBudgetCategoryDialog from '../components/AddBudgetCategoryDialog';
import { ADD_BUDGET_CATEGORY_DIALOG } from '../components/AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';
import { addBudgetCategory } from '../actions/budgets';


const mapStateToProps = state => {
    return {
        budget: state.selectedBudget.budget
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleClose: () => {
            dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
        },
        handleSubmit: (data, successCallback, errorCallback) => {
            dispatch(addBudgetCategory(data, successCallback, errorCallback));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBudgetCategoryDialog);