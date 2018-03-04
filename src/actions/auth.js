import fetch from 'isomorphic-fetch';

export const REQUEST_AUTH_TOKEN = 'REQUEST_AUTH_TOKEN';
export const RECEIVE_AUTH_TOKEN = 'RECEIVE_AUTH_TOKEN';

function requestAuthToken() {
    return {
        type: REQUEST_AUTH_TOKEN
    }
}

function receiveAuthToken(data) {
    return {
        type: RECEIVE_AUTH_TOKEN,
        data
    }
}

export function fetchAuthToken(username, password) {
    return dispatch => {
        dispatch(requestAuthToken());
        return fetch('http://localhost:8000/users/obtain-auth-token/')
            .then(response => response.json())
            .then(json => dispatch(receiveAuthToken(json)))
    }
}