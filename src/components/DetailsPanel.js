import React, {Component} from 'react';
import './stylesheets/DetailsPanel.css';
import InfoPanel from "./InfoPanel";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default class DetailsPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
           dialog: 0
        };
    }

    addButtonStyle = {
        bottom: 0,
        right: 0,
        position: 'absolute',
        marginRight: '35px',
        marginBottom: '20px'
    };

    render() {
        return (
            <div className="DetailsPanel">
                <div className="tableView">
                    <div className="currentTable">
                        {this.props.table}
                    </div>
                    <FloatingActionButton
                        style={this.addButtonStyle}
                        onTouchTap={this.props.handleClickAdd}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
                {!this.props.mobileMode &&
                    <InfoPanel />
                }
            </div>
        );
    }
}