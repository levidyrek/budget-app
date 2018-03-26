import { TOGGLE_DIALOG } from '../actions/dialogs'

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