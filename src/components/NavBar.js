import React, {Component} from 'react';
import './stylesheets/NavBar.css';
import MenuItem from 'material-ui/MenuItem';
import logo from '../logo.svg';


export default class NavBar extends Component {

    styles = {
        floating: {
            position: "absolute",
            zIndex: 1000
        },
        default: {

        }
    };

    render() {
        return (
            <div className="NavBar"
                 style={this.props.floating ? this.styles.floating : this.styles.default}>
                <img src={logo} alt="" id="logo"/>
                <div className="menu">
                    <MenuItem focusState="focused">Expenses</MenuItem>
                    <MenuItem>Transactions</MenuItem>
                    <MenuItem>Income</MenuItem>
                    <MenuItem>Goals</MenuItem>
                </div>
            </div>
        );
    }
}