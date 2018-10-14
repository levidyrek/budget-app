import React, {Component} from 'react'
import './stylesheets/DetailsPanel.css'
import InfoPanel from "./InfoPanel"
import Button from '@material-ui/core/Button'
import ContentAdd from '@material-ui/icons/Add'


export default class DetailsPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
           dialog: 0
        }
    }

    addButtonStyle = {
        bottom: 0,
        right: 0,
        position: 'absolute',
        marginRight: '35px',
        marginBottom: '20px'
    }

    render() {
        return (
            <div className="DetailsPanel">
                <div className="tableView">
                    <div className="currentTable">
                        {this.props.table}
                    </div>
                    <Button
                        variant="fab"
                        style={this.addButtonStyle}
                        onClick={this.props.handleClickAdd}
                    >
                        <ContentAdd />
                    </Button>
                </div>
                {!this.props.mobileMode &&
                    <InfoPanel />
                }
            </div>
        )
    }
}