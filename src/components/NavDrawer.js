import React, {Component} from 'react';
import './stylesheets/NavDrawer.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import logo from '../logo.svg';


export default class NavDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        return (
            <div className="NavDrawer">
                <Drawer open={this.state.open}>
                    <img src={logo} className="App-logo" alt=""/>
                    <MenuItem>Budgets</MenuItem>
                    <MenuItem>Goals</MenuItem>
                </Drawer>
            </div>
        );
    }
}