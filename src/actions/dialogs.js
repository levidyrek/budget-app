export const TOGGLE_DIALOG = 'TOGGLE_DIALOG';

export function toggleDialog(dialog) {
    return {
        type: TOGGLE_DIALOG,
        dialog
    };
}