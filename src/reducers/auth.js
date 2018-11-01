import {
  REQUEST_AUTH, RECEIVE_AUTH,
  RECEIVE_AUTH_ERROR, REQUEST_LOGOUT,
  RECEIVE_LOGOUT_ERROR, UNAUTHENTICATE,
} from '../actions/auth';


export function auth(state = {
  fetching: false,
  loggingOut: false,
  authenticated: false,
  error: '',
  verified: false, // true if verified by ajax request
}, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return Object.assign({}, state, {
        fetching: true,
      });
    case RECEIVE_AUTH:
      return Object.assign({}, state, {
        fetching: false,
        loggingOut: false,
        authenticated: true,
        error: '',
        verified: true,
      });
    case RECEIVE_AUTH_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        loggingOut: false,
        authenticated: false,
        verified: true,
        error: action.error,
      });
    case REQUEST_LOGOUT:
      return Object.assign({}, state, {
        loggingOut: true,
      });
    case UNAUTHENTICATE:
      return Object.assign({}, state, {
        fetching: false,
        loggingOut: false,
        authenticated: false,
        verified: true,
        error: '',
      });
    case RECEIVE_LOGOUT_ERROR:
      return Object.assign({}, state, {
        loggingOut: false,
        error: action.error,
      });
    default:
      return state;
  }
}
