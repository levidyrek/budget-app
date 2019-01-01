import { BUDGETS_ENDPOINT, BUDGET_CATEGORIES_ENDPOINT } from '../constants';

export const REQUEST_BUDGETS = 'REQUEST_BUDGETS';
export const RECEIVE_BUDGETS = 'RECEIVE_BUDGETS';

export const REQUEST_SELECTED_BUDGET = 'REQUEST_SELECTED_BUDGET';
export const RECEIVE_SELECTED_BUDGET = 'RECEIVE_SELECTED_BUDGET';
export const INVALIDATE_SELECTED_BUDGET = 'INVALIDATE_SELECTED_BUDGET';

function requestBudgets() {
  return {
    type: REQUEST_BUDGETS,
  };
}

function receiveBudgets(data) {
  return {
    type: RECEIVE_BUDGETS,
    data,
  };
}

export function fetchBudgets() {
  return (dispatch) => {
    dispatch(requestBudgets());
    return fetch(BUDGETS_ENDPOINT, {
      credentials: 'include',
    }).then(response => response.json()).then((json) => {
      dispatch(receiveBudgets(json));
    }, (error) => {
      console.log(error.message);
    });
  };
}

function requestSelectedBudget(month, year) {
  return {
    type: REQUEST_SELECTED_BUDGET,
    month,
    year,
  };
}

function receiveSelectedBudget(data) {
  return {
    type: RECEIVE_SELECTED_BUDGET,
    data,
  };
}

export function fetchSelectedBudget(month, year) {
  return (dispatch) => {
    dispatch(requestSelectedBudget(month, year));
    return fetch(
      `${BUDGETS_ENDPOINT}?month=${month}&year=${year}`,
      {
        credentials: 'include',
      },
    ).then(response => response.json()).then((json) => {
      dispatch(receiveSelectedBudget(json));
    }, (error) => {
      console.log(error.message);
    });
  };
}

function invalidateSelectedBudget() {
  return {
    type: INVALIDATE_SELECTED_BUDGET,
  };
}

function getUserError(json) {
  let userMsg = 'Unexpected error occurred.';
  if (json.detail) {
    userMsg = json.detail;
  } else if (json.non_field_errors) {
    userMsg = json.non_field_errors.join('\n');
  }
  return userMsg;
}

export function addBudgetCategory(budgetCategory, successCallback, errorCallback) {
  return dispatch => fetch(BUDGET_CATEGORIES_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(budgetCategory),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(response => response.json().then((json) => {
    if (response.ok) {
      return json;
    }

    // Response failed. Throw an error with the appropriate message.
    const userMsg = getUserError(json);

    return Promise.reject(userMsg);
  })).then(() => {
    // Request was successful.
    successCallback();
    dispatch(invalidateSelectedBudget());
  }).catch((error) => {
    errorCallback(error);
  });
}

export function updateBudgetCategory(budgetCategory, successCallback, errorCallback) {
  return dispatch => fetch(`${BUDGET_CATEGORIES_ENDPOINT}${budgetCategory.pk}/`, {
    method: 'PUT',
    body: JSON.stringify(budgetCategory),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then(response => response.json().then((json) => {
    if (response.ok) {
      return json;
    }

    // Response failed. Throw an error with the appropriate message.
    const userMsg = getUserError(json);

    return Promise.reject(userMsg);
  })).then(() => {
    // Request was successful.
    successCallback();
    dispatch(invalidateSelectedBudget());
  }).catch((error) => {
    errorCallback(error);
  });
}

export function deleteBudgetCategory(pk, successCallback, errorCallback) {
  return dispatch => fetch(`${BUDGET_CATEGORIES_ENDPOINT}${pk}/`, {
    method: 'DELETE',
    credentials: 'include',
  }).then((response) => {
    if (response.ok) {
      return;
    }

    return Promise.reject('Delete was unsuccessful.');
  }).then(() => {
    // Request was successful.
    successCallback();
    dispatch(invalidateSelectedBudget());
  }).catch((error) => {
    errorCallback(error);
  });
}
