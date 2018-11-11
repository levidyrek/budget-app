import React from 'react';
import ReactLoading from 'react-loading';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


/**
 * Generic auth page that redirects to a previous page or
 * root when authenticated.
 */
export default function AuthPage(props) {
  const {
    authenticated, children, error, fetching, location, title,
  } = props;

  if (fetching) {
    return (
      <ReactLoading type="bars" color="#444" />
    );
  }

  if (authenticated) {
    // Redirect to previous page or root, if none.
    const to = location.state ? location.state.referrer : '/';
    return (
      <Redirect to={to} />
    );
  }

  return (
    <div>
      <h2>Budget App</h2>
      <h3>{title}</h3>
      <p id="error">
        {error}
      </p>
      {children}
    </div>
  );
}

AuthPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      referrer: PropTypes.string,
    }),
  }).isRequired,
  title: PropTypes.string.isRequired,
};

AuthPage.defaultProps = {
  error: '',
};
