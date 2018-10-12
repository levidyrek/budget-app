import React, {Component} from 'react'
import './stylesheets/BaseTableWithAddButton.css'
import BaseTable from "./BaseTable"
import Button from '@material-ui/core/Button'
import ContentAdd from '@material-ui/icons/Add'


export default class BaseTableWithAddButton extends Component {
    buttonStyle = {
        position: 'absolute',
        right: 0,
        bottom: 0
    }

    render() {
        return (
            <div className="BaseTableWithAddButton">
                <BaseTable rows={this.props.rows} columns={this.props.columns} />
                <Button variant="fab" style={this.buttonStyle}>
                    <ContentAdd/>
                </Button>
            </div>
        )
    }
}