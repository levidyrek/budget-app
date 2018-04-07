import fetch from '../utils/fetch'
import { showErrorDialog } from './dialogs'

export const REQUEST_AUTH = "REQUEST_AUTH_TOKEN"
export const RECEIVE_AUTH = "RECEIVE_AUTH_TOKEN"
export const RECEIVE_AUTH_ERROR = "RECEIVE_AUTH_ERROR"
export const UNAUTHENTICATE = "UNAUTHENTICATE"
export const REQUEST_USER_INFO = "REQUEST_USER_INFO"
export const RECEIVE_USER_INFO = "RECEIVE_USER_INFO"
export const REQUEST_LOGOUT = "REQUEST_LOGOUT"
export const RECEIVE_LOGOUT_ERROR = "RECEIVE_LOGOUT_ERROR"

function requestAuth() {
    return {
        type: REQUEST_AUTH
    }
}

function receiveAuth() {
    return {
        type: RECEIVE_AUTH
    }
}

function receiveAuthError(error = "") {
    return {
        type: RECEIVE_AUTH_ERROR,
        error
    }
}

function requestLogout() {
    return {
        type: REQUEST_LOGOUT
    }
}

export function unauthenticate() {
    return {
        type: UNAUTHENTICATE
    }
}

function receiveLogoutError(error) {
    return {
        type: RECEIVE_LOGOUT_ERROR,
        error
    }
}

export function fetchAuthToken(username, password) {
    return dispatch => {
        dispatch(requestAuth())
        return fetch(dispatch, "http://localhost:8000/users/obtain-auth-token/", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            var msg = "Could not log in with the provided credentials."
            throw new Error(msg)
        }).then(json => dispatch(receiveAuth()))
          .catch(error => dispatch(receiveAuthError(error.message)))
    }
}

/**
 * Fetches user info as a way to verify authentication or lack thereof.
 * If the request fails and returns a 401, fetch will automatically update
 * redux state.
 */
export function fetchUserInfo() {
    return dispatch => {
        dispatch(requestAuth())
        return fetch(dispatch, "http://localhost:8000/user-info/", {
            method: "GET",
            credentials: "include"
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
            var msg = "User is not logged in."
            throw new Error(msg)
        }).then(json => dispatch(receiveAuth()))
          .catch(error => dispatch(receiveAuthError()))
    }
}

export function logout() {
    return dispatch => {
        dispatch(requestLogout())
        return fetch(dispatch, "http://localhost:8000/logout/", {
            method: "GET",
            credentials: "include"
        }).then(response => {
            if (response.ok) {
                return response
            }
            var msg = "Unable to log out."
            throw new Error(msg)
        }).then(() => dispatch(unauthenticate()))
          .catch(error => {
              dispatch(receiveLogoutError(error.message))
              dispatch(showErrorDialog(error.message))
        })
    }
}
