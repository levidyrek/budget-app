import React, {Component} from 'react';
import './stylesheets/TopBar.css';
import MonthPicker from "../containers/MonthPicker";
import IconButton from "material-ui/IconButton";
import NavigationMoreVert from "material-ui/svg-icons/navigation/more-vert";
import MenuButton from "../containers/MenuButton";
import {white} from 'material-ui/styles/colors';

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
                    <IconButton>
                        <NavigationMoreVert color={white} />
                    </IconButton>
                </ul>
            </div>
        );
    }
}