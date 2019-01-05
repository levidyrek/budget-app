import React, { Component } from 'react';
import './stylesheets/NavBar.css';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class NavBar extends Component {
    styles = {
      floating: {
        position: 'absolute',
        zIndex: 1000,
      },
      default: {

      },
    }

    render() {
      const { floating } = this.props;

      return (
        <div
          className="NavBar"
          style={floating ? this.styles.floating : this.styles.default}
        >
          <h2 className="header">Budget App</h2>
          <div className="menu">
            <Link to="/budget/expenses">
              <MenuItem>Expenses</MenuItem>
            </Link>
            <MenuItem>Transactions</MenuItem>
          </div>
        </div>
      );
    }
}

NavBar.propTypes = {
  floating: PropTypes.bool.isRequired,
};

export default NavBar;
