/* eslint-disable import/prefer-default-export */
import {
  REQUEST_AUTH, RECEIVE_AUTH,
  RECEIVE_AUTH_ERROR, REQUEST_LOGOUT,
  RECEIVE_LOGOUT_ERROR, UNAUTHENTICATE,
} from '../actions/auth';


const initialAuthState = {
  fetching: false,
  loggingOut: false,
  authenticated: false,
  error: '',
  verified: false, // true if verified by ajax request
  userData: null,
};

export function auth(state = initialAuthState, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return Object.assign({}, state, {
        fetching: true,
      });
    case RECEIVE_AUTH:
      return Object.assign({}, state, initialAuthState, {
        authenticated: true,
        verified: true,
        userData: action.data,
      });
    case RECEIVE_AUTH_ERROR:
      return Object.assign({}, state, initialAuthState, {
        error: action.error,
      });
    case REQUEST_LOGOUT:
      return Object.assign({}, state, {
        loggingOut: true,
      });
    case UNAUTHENTICATE:
      return Object.assign({}, state, initialAuthState);
    case RECEIVE_LOGOUT_ERROR:
      return Object.assign({}, state, {
        loggingOut: false,
        error: action.error,
      });
    default:
      return state;
  }
}
