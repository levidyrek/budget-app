import React, {Component} from 'react';
import './stylesheets/MenuButton.css';
import IconButton from "material-ui/IconButton";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";


export default class MenuButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MenuButton">
                <IconButton className="menuButton" onTouchTap={this.props.clickHandler}>
                    <NavigationMenu/>
                </IconButton>
            </div>
        );
    }
}