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
      error: '',
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleRegister = () => {
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
    }
  }

  render() {
    const { classes } = this.props;
    const { error } = this.state;

    return (
      <div>
        <h2>Budget App</h2>
        <h3>Register</h3>
        <p id="error">
          {error}
        </p>
        <TextField
          id="username"
          label="Username"
          className={classes.textField}
          name="username"
          type="text"
          onChange={this.handleInputChange}
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          name="password"
          type="password"
          onChange={this.handleInputChange}
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
