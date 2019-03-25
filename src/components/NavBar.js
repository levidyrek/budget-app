import React from 'react';
import './stylesheets/NavBar.css';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  floating: {
    position: 'absolute',
    zIndex: 1000,
  },
});

function NavBar(props) {
  const {
    classes, floating, mobileMode, toggleNavBar,
  } = props;

  let wrapperClass = 'NavBar';
  if (floating) {
    wrapperClass += ` ${classes.floating}`;
  }

  return (
    <div
      className={wrapperClass}
    >
      {
        mobileMode
        && (
          <IconButton
            aria-label="Close"
            className={classes.button}
            onClick={toggleNavBar}
          >
            <CloseIcon />
          </IconButton>
        )
      }
      <h2 className="header">Budget App</h2>
      <div className="menu">
        <NavLink
          to="/budget/expenses"
          activeClassName="active"
          onClick={toggleNavBar}
        >
          <MenuItem className="menuItem">Expenses</MenuItem>
        </NavLink>
        <NavLink
          to="/budget/transactions"
          activeClassName="active"
          onClick={toggleNavBar}
        >
          <MenuItem className="menuItem">Transactions</MenuItem>
        </NavLink>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  floating: PropTypes.bool.isRequired,
  mobileMode: PropTypes.bool.isRequired,
  toggleNavBar: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavBar);
