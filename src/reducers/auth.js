import { REQUEST_AUTH_TOKEN, RECEIVE_AUTH_TOKEN } from '../actions/auth'


export function token(state = {
        fetching: false,
        token: "",
        error: ""
    }, action) {

    switch(action.type) {
        case REQUEST_AUTH_TOKEN:
            return Object.assign({}, state, {
                fetching: true,
                token: "",
                error: ""
            })
        case RECEIVE_AUTH_TOKEN:
            return Object.assign({}, state, {
                fetching: false,
                token: action.data.token || "",
                error: action.data.non_field_errors ?
                       action.data.non_field_errors.join("\n") :
                       ""
            })
        default:
            return state
    }
}