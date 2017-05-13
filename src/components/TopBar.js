import React, { Component } from 'react';
import './stylesheets/TopBar.css';
import AppBar from 'material-ui/AppBar';

export default class TopBar extends Component {
    render() {
        return (
            <div className="topbar">
                <AppBar
                    title="Budget App"
                />
            </div>
        );
    }
}
