import React, {Component} from 'react';
import './stylesheets/BaseTable.css';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export default class BaseTable extends Component {
    onClickCell = (event) => {

    }

    render() {
        const headers = this.props.columns.map((column, index) => {
            return <TableHeaderColumn>{column.name}</TableHeaderColumn>;
        });
        const rowElements = this.props.rows.map((row, index) => {
            let rowCols = [];
            for (let column of this.props.columns) {
                rowCols.push(
                    <TableRowColumn>
                        {row[column.key]}
                    </TableRowColumn>
                );
            }

            return (
                <TableRow>
                    {rowCols}
                </TableRow>
            );
        });

        return (
            <Table
                className="BaseTable"
                fixedHeader={true}
                selectable={false}
            >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        {headers}
                    </TableRow>
                </TableHeader>
                <TableBody
                    style={{
                        overflow: "auto"
                    }}
                    displayRowCheckbox={false}
                >
                    {rowElements}
                </TableBody>
            </Table>
        );
    }
}