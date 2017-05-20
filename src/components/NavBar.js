import React, {Component} from 'react';
import './stylesheets/NavBar.css';
import MenuItem from 'material-ui/MenuItem';
import logo from '../logo.svg';


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="NavBar">
                <img src={logo} alt="" id="logo"/>
                <div className="menu">
                    <MenuItem>Budgets</MenuItem>
                    <MenuItem>Goals</MenuItem>
                </div>
            </div>
        );
    }
}