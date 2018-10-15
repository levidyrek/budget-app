import React, {Component} from 'react'
import './stylesheets/TopBar.css'
import MonthPicker from '../containers/MonthPicker'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import NavigationMoreVert from '@material-ui/icons/MoreVert'
import MenuButton from '../containers/MenuButton'

export default class TopBar extends Component {

    render() {
        return (
            <div className="TopBar">
                <ul className="left">
                    <li>
                        {this.props.mobileMode &&
                            <MenuButton />
                        }
                    </li>
                    <li><MonthPicker/></li>
                </ul>
                <ul className="right">
                    <Button><NavigationMoreVert /></Button>
                    <MenuItem onClick={this.props.logOut}>
                        Logout
                    </MenuItem>
                </ul>
            </div>
        )
    }
}