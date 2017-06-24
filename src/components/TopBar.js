import React, {Component} from 'react';
import './stylesheets/TopBar.css';
import MonthPicker from "./MonthPicker";
import IconButton from "material-ui/IconButton";
import NavigationMoreVert from "material-ui/svg-icons/navigation/more-vert";
import MenuButton from "../containers/MenuButton";

export default class TopBar extends Component {
    constructor(props) {
        super(props);
    }

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
                        <NavigationMoreVert/>
                    </IconButton>
                </ul>
            </div>
        );
    }
}