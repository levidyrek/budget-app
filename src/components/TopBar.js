import React, {Component} from 'react'
import './stylesheets/TopBar.css'
import MonthPicker from '../containers/MonthPicker'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import NavigationMoreVert from '@material-ui/icons/MoreVert'
import MenuButton from '../containers/MenuButton'
// import white from '@material-ui/core/colors/white'

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
                        {/* <Button><NavigationMoreVert color={white} /></Button> */}
                        <Button><NavigationMoreVert /></Button>
                        <MenuItem primaryText="Log Out" onClick={this.props.logOut} />
                    </Menu>
                </ul>
            </div>
        )
    }
}