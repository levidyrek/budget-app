import React, { Component } from 'react';
import './stylesheets/LoginPage.css';
import PropTypes from 'prop-types';

import AuthPage from './AuthPage';


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      username: '',
      password: '',
    };

    // If not authenticated but not verified, verify.
    const { auth, fetchUserInfo } = this.props;
    if (!auth.authenticated && !auth.verified && !auth.fetching) {
      fetchUserInfo();
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

    handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    handleLogin = () => {
      const { fetchAuthToken } = this.props;
      const { username, password } = this.state;

      if (!username.length) {
        this.setState({
          error: 'Username is required.',
        });
      } else if (!password.length) {
        this.setState({
          error: 'Password is required.',
        });
      } else {
        this.setState({
          error: '',
        });
        fetchAuthToken(username, password);
      }
    }

    render() {
      const { auth, location } = this.props;
      const { error } = this.state;

      return (
        <AuthPage
          fetching={auth.fetching}
          authenticated={auth.authenticated}
          error={error}
          location={location}
          title="Log In"
        >
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={this.handleInputChange}
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
          />
          <input
            id="submit"
            type="submit"
            value="Log in"
            onClick={this.handleLogin}
          />
        </AuthPage>
      );
    }
}

LoginPage.propTypes = {
  auth: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    error: PropTypes.string,
    fetching: PropTypes.bool.isRequired,
    verified: PropTypes.bool.isRequired,
  }).isRequired,
  fetchAuthToken: PropTypes.func.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      referrer: PropTypes.string,
    }),
  }).isRequired,
};
