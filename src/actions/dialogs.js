export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const SHOW_ERROR_DIALOG = 'SHOW_ERROR_DIALOG'
export const HIDE_ERROR_DIALOG = 'HIDE_ERROR_DIALOG'

export function toggleDialog(dialog) {
    return {
        type: TOGGLE_DIALOG,
        dialog
    }
}

export function showErrorDialog(error) {
    return {
        type: SHOW_ERROR_DIALOG,
        error
    }
}

export function hideErrorDialog() {
    return {
        type: HIDE_ERROR_DIALOG
    }
}
