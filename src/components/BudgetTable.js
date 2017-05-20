import React, {Component} from 'react';
import './stylesheets/BudgetTable.css';
import {Table, TableHeader, TableHeaderColumn, TableRowColumn} from "material-ui";
import {TableBody, TableRow} from "material-ui/Table/index";


export default class BudgetTable extends Component {
    render() {
        return (
            <div className='BudgetTable'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Category</TableHeaderColumn>
                            <TableHeaderColumn>Spent</TableHeaderColumn>
                            <TableHeaderColumn>Limit</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>Groceries</TableRowColumn>
                            <TableRowColumn>100</TableRowColumn>
                            <TableRowColumn>500</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Dining Out</TableRowColumn>
                            <TableRowColumn>150</TableRowColumn>
                            <TableRowColumn>250</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Shopping</TableRowColumn>
                            <TableRowColumn>50</TableRowColumn>
                            <TableRowColumn>100</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Rent</TableRowColumn>
                            <TableRowColumn>0</TableRowColumn>
                            <TableRowColumn>1000</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Misc</TableRowColumn>
                            <TableRowColumn>150</TableRowColumn>
                            <TableRowColumn>150</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        );
    }
}