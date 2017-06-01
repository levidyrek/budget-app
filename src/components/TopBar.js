import React, {Component} from 'react';
import './stylesheets/TopBar.css';
import ActionToday from 'material-ui/svg-icons/action/today';

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    render() {
        return (
            <div className="TopBar">
                <div>
                    <ActionToday/>
                </div>
            </div>
        );
    }
}