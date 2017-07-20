import React, {Component} from 'react';
import './stylesheets/MonthPicker.css';
import ActionToday from 'material-ui/svg-icons/action/today';
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import IconButton from 'material-ui/IconButton';


export default class MonthPicker extends Component {
    render() {
        return (
            <div className="MonthPicker">
                <IconButton>
                    <HardwareKeyboardArrowLeft/>
                </IconButton>
                <ActionToday/>
                <span className="dateText">
                    <span id="month">July</span>
                    <span id="year">2017</span>
                </span>
                <IconButton>
                    <HardwareKeyboardArrowRight/>
                </IconButton>
            </div>
        );
    }
}