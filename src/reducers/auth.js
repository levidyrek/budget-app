import { REQUEST_AUTH, RECEIVE_AUTH,
         RECEIVE_AUTH_ERROR, UNAUTHENTICATE } from '../actions/auth'


export function auth(state = {
        fetching: false,
        authenticated: false,
        error: "",
        verified: false  // true if verified by ajax request
    }, action) {

    switch(action.type) {
        case REQUEST_AUTH:
            return Object.assign({}, state, {
                fetching: true
            })
        case RECEIVE_AUTH:
            return Object.assign({}, state, {
                fetching: false,
                authenticated: true,
                error: "",
                verified: true
            })
        case RECEIVE_AUTH_ERROR:
            return Object.assign({}, state, {
                fetching: false,
                authenticated: false,
                verified: true,
                error: action.error
            })
        case UNAUTHENTICATE:
            return Object.assign({}, state, {
                fetching: false,
                authenticated: false,
                verified: true,
                error: ""
            })
        default:
            return state
    }
}