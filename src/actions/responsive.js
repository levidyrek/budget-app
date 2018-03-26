export const ENABLE_MOBILE_MODE = "ENABLE_MOBILE_MODE"
export const TOGGLE_NAV_BAR = "TOGGLE_NAV_BAR"

export function enableMobileMode(enable = false) {
    return {
        type: ENABLE_MOBILE_MODE,
        enable
    }
}

export function toggleNavBar() {
    return {
        type: TOGGLE_NAV_BAR
    }
}