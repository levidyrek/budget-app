import React, {Component} from 'react';
import './stylesheets/TopBar.css';


export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    render() {
        return (
            <div className="TopBar">
                <div>

                </div>
            </div>
        );
    }
}