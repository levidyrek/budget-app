import { REQUEST_BUDGETS, RECEIVE_BUDGETS, REQUEST_SELECTED_BUDGET,
         RECEIVE_SELECTED_BUDGET, INVALIDATE_SELECTED_BUDGET} from '../actions/budgets';


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

var empty_budget = {
    budget_categories: {},
    budget_category_groups: {},
    budget_goals: [],
    month: "",
    year: ""
};

export function selectedBudget(
    state = {
        fetching: false,
        invalidated: true,
        month: 'JAN',
        year: 2018,
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
                invalidated: false,
                budget: action.data.length > 0 ? action.data[0] : empty_budget
            });
        case INVALIDATE_SELECTED_BUDGET:
            return Object.assign({}, state, {
                invalidated: true
            });
        default:
            return state;
    }
}