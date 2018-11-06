/* eslint-disable import/prefer-default-export */
import {
  REQUEST_AUTH, RECEIVE_AUTH,
  RECEIVE_AUTH_ERROR, REQUEST_LOGOUT,
  RECEIVE_LOGOUT_ERROR, UNAUTHENTICATE,
} from '../actions/auth';


const initialAuthState = {
  authenticated: false,
  error: '',
  fetching: false,
  loggingOut: false,
  userData: null,
  verified: false, // true if verified by ajax request
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
        userData: action.data,
        verified: true,
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
        error: action.error,
        loggingOut: false,
      });
    default:
      return state;
  }
}
