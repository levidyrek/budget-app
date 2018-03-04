import { REQUEST_AUTH_TOKEN, RECEIVE_AUTH_TOKEN } from '../actions/auth';


export function token(state = {
        fetching: false,
        token: ''
    }, action) {

    switch(action.type) {
        case REQUEST_AUTH_TOKEN:
            return Object.assign({}, state, {
                fetching: true
            });
        case RECEIVE_AUTH_TOKEN:
            return Object.assign({}, state, {
                fetching: false,
                token: action.data.token
            });
        default:
            return state;
    }
}