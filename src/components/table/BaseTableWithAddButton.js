import React, {Component} from 'react'
import './stylesheets/BaseTableWithAddButton.css'
import BaseTable from "./BaseTable"
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'


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
                <FloatingActionButton style={this.buttonStyle}>
                    <ContentAdd/>
                </FloatingActionButton>
            </div>
        )
    }
}