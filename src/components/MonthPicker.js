import React, {Component} from 'react'
import './stylesheets/MonthPicker.css'
import ActionToday from 'material-ui/svg-icons/action/today'
import HardwareKeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left'
import HardwareKeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right'
import IconButton from 'material-ui/IconButton'
import {white} from 'material-ui/styles/colors'


export default class MonthPicker extends Component {
    render() {
        return (
            <div className="MonthPicker">
                <IconButton>
                    <HardwareKeyboardArrowLeft color={white} />
                </IconButton>
                <ActionToday color={white} />
                <span className="dateText">
                    <span id="month">Jan</span>
                    <span id="year">2018</span>
                </span>
                <IconButton>
                    <HardwareKeyboardArrowRight color={white} />
                </IconButton>
            </div>
        )
    }
}