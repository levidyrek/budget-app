import React, {Component} from 'react'
import './stylesheets/TopBar.css'
import MonthPicker from "../containers/MonthPicker"
import IconButton from "material-ui/core/IconButton"
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import NavigationMoreVert from "material-ui/icons/MoreVert"
import MenuButton from "../containers/MenuButton"
import white from '@material-ui/core/colors/white'

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
                    <Menu>
                        <IconButton><NavigationMoreVert color={white} /></IconButton>
                        <MenuItem primaryText="Log Out" onClick={this.props.logOut} />
                    </Menu>
                </ul>
            </div>
        )
    }
}