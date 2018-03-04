import { BUDGETS_ENDPOINT, BUDGET_CATEGORIES_ENDPOINT } from '../constants';

export const REQUEST_BUDGETS = "REQUEST_BUDGETS";
export const RECEIVE_BUDGETS = "RECEIVE_BUDGETS";

function requestBudgets() {
    return {
        type: REQUEST_BUDGETS
    };
}

function receiveBudgets(data) {
    return {
        type: RECEIVE_BUDGETS,
        data
    };
}

export function fetchBudgets() {
    return dispatch => {
        dispatch(requestBudgets());
        return fetch(BUDGETS_ENDPOINT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token d0d900d9b17e8d26653c42ea62629d030afc15c9"
            },
            credentials: "same-origin"
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(receiveBudgets(json));
        }, error => {
            console.log(error.message);
        });
    };
}

export const REQUEST_SELECTED_BUDGET = "REQUEST_SELECTED_BUDGET";
export const RECEIVE_SELECTED_BUDGET = "RECEIVE_SELECTED_BUDGET";
export const INVALIDATE_SELECTED_BUDGET = "INVALIDATE_SELECTED_BUDGET";

function requestSelectedBudget(month, year) {
    return {
        type: REQUEST_SELECTED_BUDGET,
        month,
        year
    };
}

function receiveSelectedBudget(data) {
    return {
        type: RECEIVE_SELECTED_BUDGET,
        data
    };
}

export function fetchSelectedBudget(month, year) {
    return dispatch => {
        dispatch(requestSelectedBudget(month, year));
        return fetch(BUDGETS_ENDPOINT + "?month=" + month + "&year=" + year, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token d0d900d9b17e8d26653c42ea62629d030afc15c9"
            },
            credentials: "same-origin"
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(receiveSelectedBudget(json));
        }, error => {
            console.log(error.message);
        });
    };
}

function invalidateSelectedBudget() {
    return {
        type: INVALIDATE_SELECTED_BUDGET
    };
}

export const ADD_BUDGET_CATEGORY = "ADD_BUDGET_CATEGORY";

export function addBudgetCategory(budgetCategory,
                                  successCallback,
                                  errorCallback) {
    return dispatch => {
        return fetch(BUDGET_CATEGORIES_ENDPOINT, {
            method: "POST",
            body: JSON.stringify(budgetCategory),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token d0d900d9b17e8d26653c42ea62629d030afc15c9"
            },
            credentials: "same-origin"
        }).then(function(response) {
            if (response.ok) {
                return response.json();
            }
            let json = response.json();
            let userMsg = json.detail ? json.detail : 'Unexpected error occurred.';
            throw Error(userMsg);
        }).then(function(json) {
            successCallback();
            dispatch(invalidateSelectedBudget());
        }, error => {
            errorCallback(error.message);
            console.log(error.message);
        });
    };
}