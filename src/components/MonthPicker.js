import React, {Component} from 'react'
import './stylesheets/MonthPicker.css'
import ActionToday from '@material-ui/icons/Today'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import Button from '@material-ui/core/Button'
// import white from '@material-ui/core/colors/white'


export default class MonthPicker extends Component {
    render() {
        return (
            <div className="MonthPicker">
                <Button>
                    {/* <KeyboardArrowLeft color={white} /> */}
                    <KeyboardArrowLeft />
                </Button>
                {/* <ActionToday color={white} /> */}
                <ActionToday />
                <span className="dateText">
                    <span id="month">Jan</span>
                    <span id="year">2018</span>
                </span>
                <Button>
                    {/* <KeyboardArrowRight color={white} /> */}
                    <KeyboardArrowRight />
                </Button>
            </div>
        )
    }
}