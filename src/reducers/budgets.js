import {
  REQUEST_BUDGETS, RECEIVE_BUDGETS, REQUEST_SELECTED_BUDGET,
  RECEIVE_SELECTED_BUDGET, INVALIDATE_SELECTED_BUDGET,
} from '../actions/budgets';
import { UNAUTHENTICATE } from '../actions/auth';


export function budgets(
  state = {
    fetching: false,
    invalidated: false,
    items: null,
  }, action,
) {
  switch (action.type) {
    case REQUEST_BUDGETS:
      return Object.assign({}, state, {
        fetching: true,
      });
    case RECEIVE_BUDGETS:
      return Object.assign({}, state, {
        fetching: false,
        items: action.data,
      });
    default:
      return state;
  }
}

const emptyBudget = {
  budget_categories: {},
  budget_category_groups: {},
  month: '',
  transactions: {},
  year: '',
};

export function selectedBudget(
  state = {
    fetching: false,
    invalidated: true,
    month: '',
    year: 0,
    budget: null,
  }, action,
) {
  switch (action.type) {
    case REQUEST_SELECTED_BUDGET:
      return Object.assign({}, state, {
        fetching: true,
        month: action.month,
        year: action.year,
        budget: null,
      });
    case RECEIVE_SELECTED_BUDGET:
      return Object.assign({}, state, {
        fetching: false,
        invalidated: false,
        budget: action.data.length > 0 ? action.data[0] : emptyBudget,
      });
    case INVALIDATE_SELECTED_BUDGET:
      return Object.assign({}, state, {
        invalidated: true,
      });
    case UNAUTHENTICATE:
      return Object.assign({}, state, {
        invalidated: true,
        budget: null,
      });
    default:
      return state;
  }
}
