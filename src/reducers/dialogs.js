import { SHOW_ERROR_DIALOG, TOGGLE_DIALOG, HIDE_ERROR_DIALOG } from '../actions/dialogs';
import { ADD_BUDGET_CATEGORY_DIALOG } from '../components/AddBudgetCategoryDialog';
import { EDIT_BUDGET_CATEGORY_DIALOG } from '../components/EditBudgetCategoryDialog';


const dialogDefault = {
  show: false,
  data: null,
};

const dialogState = {
  [ADD_BUDGET_CATEGORY_DIALOG]: dialogDefault,
  [EDIT_BUDGET_CATEGORY_DIALOG]: dialogDefault,
};

export function dialogs(state = dialogState, action) {
  switch (action.type) {
    case TOGGLE_DIALOG:
      return Object.assign({}, state, {
        [action.dialog]: {
          show: !state[action.dialog].show,
          data: action.data,
        },
      });
    default:
      return state;
  }
}

export function errorDialog(state = {
  error: '',
}, action) {
  switch (action.type) {
    case SHOW_ERROR_DIALOG:
      return Object.assign({}, state, {
        error: action.error,
      });
    case HIDE_ERROR_DIALOG:
      return Object.assign({}, state, {
        error: '',
      });
    default:
      return state;
  }
}
