import { REQUEST_BUDGETS, RECEIVE_BUDGETS, REQUEST_SELECTED_BUDGET,
         RECEIVE_SELECTED_BUDGET, CHANGE_SELECTED_BUDGET} from '../actions/budgets';


export function budgets(
    state = {
        fetching: false,
        invalidated: false,
        items: null
    }, action) {
    switch (action.type) {
        case REQUEST_BUDGETS:
            return Object.assign({}, state, {
                fetching: true
            });
        case RECEIVE_BUDGETS:
            return Object.assign({}, state, {
                fetching: false,
                items: action.data
            });
        default:
            return state;
    }
}

export function selectedBudget(
    state = {
        fetching: false,
        invalidated: false,
        month: 'JAN2000',
        budget: null
    }, action) {

    switch (action.type) {
        case REQUEST_SELECTED_BUDGET:
            return Object.assign({}, state, {
                fetching: true,
                month: action.month,
                budget: null
            });
        case RECEIVE_SELECTED_BUDGET:
            return Object.assign({}, state, {
                fetching: false,
                budget: action.data
            });
        default:
            return state;
    }
}