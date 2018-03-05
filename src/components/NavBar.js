import React, {Component} from 'react';
import './stylesheets/NavBar.css';
import MenuItem from 'material-ui/MenuItem';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


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
                    <Link to='/budget/expenses'>
                        <MenuItem>Expenses</MenuItem>
                    </Link>
                    <MenuItem>Transactions</MenuItem>
                    <MenuItem>Income</MenuItem>
                    <MenuItem>Goals</MenuItem>
                </div>
            </div>
        );
    }
}