import { TOGGLE_DIALOG } from '../actions/dialogs';
import { ADD_BUDGET_CATEGORY_DIALOG } from '../components/AddBudgetCategoryDialog';

export function dialogs(
    state = {
        [ADD_BUDGET_CATEGORY_DIALOG]: false
    }, action) {
    switch (action.type) {
        case TOGGLE_DIALOG:
            return Object.assign({}, state, {
                [action.dialog]: !state[action.dialog]
            });
        default:
            return state;
    }
}