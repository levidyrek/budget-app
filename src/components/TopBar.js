import React, {Component} from 'react';
import './stylesheets/TopBar.css';
import MonthPicker from "./MonthPicker";

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    render() {
        return (
            <div className="TopBar">
                <ul>
                    <li><MonthPicker/></li>
                </ul>
            </div>
        );
    }
}