import React, {Component} from 'react'
import './stylesheets/MenuButton.css'
import Button from '@material-ui/core/Button'
import NavigationMenu from '@material-ui/icons/Menu'


export default class MenuButton extends Component {

    render() {
        return (
            <div className="MenuButton">
                <Button className="menuButton" onClick={this.props.clickHandler}>
                    <NavigationMenu/>
                </Button>
            </div>
        )
    }
}