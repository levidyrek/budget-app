import { SHOW_ERROR_DIALOG, TOGGLE_DIALOG, HIDE_ERROR_DIALOG } from '../actions/dialogs'

export function dialogs(state = {}, action) {
    switch (action.type) {
        case TOGGLE_DIALOG:
            return Object.assign({}, state, {
                [action.dialog]: !state[action.dialog]
            })
        default:
            return state
    }
}

export function errorDialog(state={
    error: ""
}, action) {
    switch (action.type) {
        case SHOW_ERROR_DIALOG:
            return Object.assign({}, state, {
                error: action.error
            })
        case HIDE_ERROR_DIALOG:
            return Object.assign({}, state, {
                error: ""
            })
        default:
            return state
    }
}
