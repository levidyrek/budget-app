import React, {Component} from 'react'
import './stylesheets/MonthPicker.css'
import ActionToday from '@material-ui/icons/Today'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import IconButton from '@material-ui/core/IconButton'
import white from '@material-ui/core/colors/white'


export default class MonthPicker extends Component {
    render() {
        return (
            <div className="MonthPicker">
                <IconButton>
                    <KeyboardArrowLeft color={white} />
                </IconButton>
                <ActionToday color={white} />
                <span className="dateText">
                    <span id="month">Jan</span>
                    <span id="year">2018</span>
                </span>
                <IconButton>
                    <KeyboardArrowRight color={white} />
                </IconButton>
            </div>
        )
    }
}