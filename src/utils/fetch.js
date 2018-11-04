import isoFetch from 'isomorphic-fetch';
import { unauthenticate } from '../actions/auth';

/**
 * Wraps isomorphic-fetch and dispatches a Redux action to unauthenticate
 * if an unauthorized response is received.
 *
 * @param {string} url      The url for the request.
 * @param {object} options  The options for the request.
 */
export default function fetch(dispatch, url, options = {}) {
  return isoFetch(url, options).then((response) => {
    if (response.status === 401) {
      dispatch(unauthenticate());
    }
    return response;
  });
}
