import React, {Component} from 'react';
import './stylesheets/InfoPanel.css';


export default class InfoPanel extends Component {
    render() {
        return (
            <div className="InfoPanel"
                 style={{
                     display: this.props.visible ? "" : "none"
                 }}>
            </div>
        );
    }
}