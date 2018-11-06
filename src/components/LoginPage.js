import React, { Component } from 'react';
import './stylesheets/LoginPage.css';
import ReactLoading from 'react-loading';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


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

      if (auth.fetching) {
        return (
          <ReactLoading type="bars" color="#444" />
        );
      }

      if (auth.authenticated) {
        // Redirect to previous page or root, if none.
        const to = location.state ? location.state.referrer : '/';
        return (
          <Redirect to={to} />
        );
      }

      return (
        <div>
          <h2>Budget App</h2>
          <p id="error">
            {error || auth.error}
          </p>
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
        </div>
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
    location: PropTypes.shape({
      referrer: PropTypes.string,
    }),
  }).isRequired,
};
