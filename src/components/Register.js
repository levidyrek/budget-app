import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        username: '',
        password: '',
        email: '',
      },
      username: '',
      password: '',
      email: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleRegister = () => {
    const { email, username, password } = this.state;

    const errors = {
      username: '',
      password: '',
      email: '',
    };

    const requiredMsg = 'This field is required.';
    if (!username.length) {
      errors.username = requiredMsg;
    }
    if (!password.length) {
      errors.password = requiredMsg;
    }
    if (!email.length) {
      errors.email = requiredMsg;
    }

    this.setState({
      error: errors,
    });
  }

  render() {
    const { classes } = this.props;
    const {
      email, error, password, username,
    } = this.state;

    return (
      <div>
        <h2>Budget App</h2>
        <h3>Register</h3>
        {/* <p id="error">
          {error}
        </p> */}
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
          id="email"
          label="Email"
          className={classes.textField}
          name="email"
          type="text"
          onChange={this.handleInputChange}
          value={email}
          InputLabelProps={{
            shrink: true,
          }}
          helperText={error.email}
          error={error.email !== ''}
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
          onClick={this.handleRegister}
        >
          Register
        </Button>
      </div>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.shape({
    textField: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Register);
