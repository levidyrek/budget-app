import React, {Component} from 'react'
import './stylesheets/MenuButton.css'
import IconButton from "material-ui/core/IconButton"
import NavigationMenu from "material-ui/icons/Menu"


export default class MenuButton extends Component {

    render() {
        return (
            <div className="MenuButton">
                <IconButton className="menuButton" onTouchTap={this.props.clickHandler}>
                    <NavigationMenu/>
                </IconButton>
            </div>
        )
    }
}