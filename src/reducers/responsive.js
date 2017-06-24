import { ENABLE_MOBILE_MODE, TOGGLE_NAV_BAR } from '../actions/responsive';


export function mobileMode(state = false, action) {
    switch (action.type) {
        case ENABLE_MOBILE_MODE:
            return action.enable;
        default:
            return state;
    }
}

export function navbarEnabled(state = false, action) {
    switch (action.type) {
        case TOGGLE_NAV_BAR:
            return !state;
        default:
            return state;
    }
};