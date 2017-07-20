export const REQUEST_BUDGETS = "REQUEST_BUDGETS";
export const RECEIVE_BUDGETS = "RECEIVE_BUDGETS";

export const REQUEST_SELECTED_BUDGET = "REQUEST_SELECTED_BUDGET";
export const RECEIVE_SELECTED_BUDGET = "RECEIVE_SELECTED_BUDGET";

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
        return fetch('http://localhost:8000/budgets/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token 3384913acd115ebec9ec26c0db656a6b634e0f71"
            },
            credentials: "same-origin"
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(receiveBudgets(json));
        }, error => {
            console.log(error.message);
        });
    }
}

function requestSelectedBudget(month) {
    return {
        type: REQUEST_SELECTED_BUDGET,
        month
    };
}

function receiveSelectedBudget(data) {
    return {
        type: RECEIVE_SELECTED_BUDGET,
        data
    };
}

export function fetchSelectedBudget(month, url) {
    return dispatch => {
        dispatch(requestSelectedBudget(month));
        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token 3384913acd115ebec9ec26c0db656a6b634e0f71"
            },
            credentials: "same-origin"
        }).then(response => {
            return response.json();
        }).then(json => {
            dispatch(receiveSelectedBudget(json));
        }, error => {
            console.log(error.message);
        });
    }
}