import React, { Component } from 'react';
import './stylesheets/TopBar.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import MonthPicker from '../containers/MonthPicker';
import MenuButton from '../containers/MenuButton';


class TopBar extends Component {
    state = {
      anchorEl: null,
    };

    handleClick = (event) => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
      this.setState({ anchorEl: null });
    };

    render() {
      const { anchorEl } = this.state;
      const {
        logOut, mobileMode, theme, userData,
      } = this.props;

      const styles = {
        topBar: {
          backgroundColor: theme.palette.primary.main,
        },
      };

      return (
        <div
          className="TopBar"
          style={styles.topBar}
        >
          <ul className="left">
            <li>
              {
                mobileMode
                && <MenuButton />
              }
            </li>
            <li><MonthPicker /></li>
          </ul>
          <ul className="right">
            <Button
              aria-owns={anchorEl ? 'user-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              {userData.username}
            </Button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
          </ul>
        </div>
      );
    }
}

TopBar.propTypes = {
  logOut: PropTypes.func.isRequired,
  mobileMode: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    palette: PropTypes.object.isRequired,
  }).isRequired,
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTheme()(TopBar);
