import React, { Component } from 'react';
import './stylesheets/TopBar.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MonthPicker from '../containers/MonthPicker';
import MenuButton from '../containers/MenuButton';

export default class TopBar extends Component {
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

      return (
        <div className="TopBar">
          <ul className="left">
            <li>
              {this.props.mobileMode
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
                        My Account
            </Button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.props.logOut}>Logout</MenuItem>
            </Menu>
          </ul>
        </div>
      );
    }
}
