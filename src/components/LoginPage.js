import React, { Component } from 'react';
import './stylesheets/LoginPage.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AuthPage from './AuthPage';


const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
    width: 200,
    display: 'block',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        username: '',
        password: '',
      },
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

      const errors = {
        username: '',
        password: '',
      };

      let valid = true;
      const requiredMsg = 'This field is required.';
      if (!username.length) {
        errors.username = requiredMsg;
        valid = false;
      }
      if (!password.length) {
        errors.password = requiredMsg;
        valid = false;
      }

      this.setState({
        error: errors,
      });

      if (valid) {
        fetchAuthToken(username, password);
      }
    }

    render() {
      const { auth, classes, location } = this.props;
      const {
        error, password, username,
      } = this.state;

      return (
        <AuthPage
          fetching={auth.fetching}
          authenticated={auth.authenticated}
          error={auth.error}
          location={location}
          title="Log In"
        >
          <TextField
            id="username"
            label="Username"
            className={classes.textField}
            name="username"
            type="text"
            onChange={this.handleInputChange}
            value={username}
            InputLabelProps={{
              shrink: true,
            }}
            helperText={error.username}
            error={error.username !== ''}
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            name="password"
            type="password"
            onChange={this.handleInputChange}
            value={password}
            InputLabelProps={{
              shrink: true,
            }}
            helperText={error.password}
            error={error.password !== ''}
          />
          <Button
            variant="contained"
            className={classes.button}
            onClick={this.handleLogin}
          >
            Login
          </Button>
          <Link to="/register">
            Register
          </Link>
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
  classes: PropTypes.shape({
    textField: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
  fetchAuthToken: PropTypes.func.isRequired,
  fetchUserInfo: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      referrer: PropTypes.string,
    }),
  }).isRequired,
};

export default withStyles(styles)(LoginPage);
