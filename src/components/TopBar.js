import React, {Component} from 'react'
import './stylesheets/TopBar.css'
import MonthPicker from "../containers/MonthPicker"
import IconButton from "material-ui/IconButton"
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import NavigationMoreVert from "material-ui/svg-icons/navigation/more-vert"
import MenuButton from "../containers/MenuButton"
import {white} from 'material-ui/styles/colors'

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
                    <IconMenu
                        iconButtonElement={
                            <IconButton><NavigationMoreVert color={white} /></IconButton>
                        } >
                        <MenuItem primaryText="Log Out" onClick={this.props.logOut} />
                    </IconMenu>
                </ul>
            </div>
        )
    }
}