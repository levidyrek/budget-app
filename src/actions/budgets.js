import { BUDGETS_ENDPOINT, BUDGET_CATEGORIES_ENDPOINT, TRANSACTIONS_ENDPOINT } from '../constants';

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

function updateBudgetItem(url, method, item, successCallback, errorCallback) {
  return dispatch => fetch(url, {
    method,
    body: JSON.stringify(item),
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

function deleteBudgetItem(url, successCallback, errorCallback) {
  return dispatch => fetch(url, {
    method: 'DELETE',
    credentials: 'include',
  }).then((response) => {
    if (response.ok) {
      return true;
    }

    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('Delete was unsuccessful.');
  }).then(() => {
    // Request was successful.
    successCallback();
    dispatch(invalidateSelectedBudget());
  }).catch((error) => {
    errorCallback(error);
  });
}

export function addBudgetCategory(budgetCategory, successCallback, errorCallback) {
  const url = BUDGET_CATEGORIES_ENDPOINT;
  const method = 'POST';
  return updateBudgetItem(url, method, budgetCategory, successCallback, errorCallback);
}

export function updateBudgetCategory(budgetCategory, successCallback, errorCallback) {
  const url = `${BUDGET_CATEGORIES_ENDPOINT}${budgetCategory.pk}/`;
  const method = 'PUT';
  return updateBudgetItem(url, method, budgetCategory, successCallback, errorCallback);
}

export function deleteBudgetCategory(pk, successCallback, errorCallback) {
  const url = `${BUDGET_CATEGORIES_ENDPOINT}${pk}/`;
  return deleteBudgetItem(url, successCallback, errorCallback);
}

export function addTransaction(transaction, successCallback, errorCallback) {
  const url = TRANSACTIONS_ENDPOINT;
  const method = 'POST';
  return updateBudgetItem(url, method, transaction, successCallback, errorCallback);
}

export function updateTransaction(transaction, successCallback, errorCallback) {
  const url = `${TRANSACTIONS_ENDPOINT}${transaction.pk}/`;
  const method = 'PUT';
  return updateBudgetItem(url, method, transaction, successCallback, errorCallback);
}

export function deleteTransaction(pk, successCallback, errorCallback) {
  const url = `${TRANSACTIONS_ENDPOINT}${pk}/`;
  return deleteBudgetItem(url, successCallback, errorCallback);
}
