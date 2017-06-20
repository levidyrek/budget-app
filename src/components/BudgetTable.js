import React, {Component} from 'react';
import './stylesheets/BudgetTable.css';
import BaseTable from "./table/BaseTable";


function createRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
        rows.push({
            group: ['Mandatory', 'Living Expenses', 'Misc', 'Entertainment'][Math.floor((Math.random() * 3) + 1)],
            category: 'Category ' + i,
            limit: Math.floor((Math.random() * 1200) + 1),
            spent: 0
        });
    }
    return rows;
}


export default class BudgetTable extends Component {
    columns = [
        {
            key: 'group',
            name: 'Group',
            editable: true
        },
        {
            key: 'category',
            name: 'Category',
            editable: true
        },
        {
            key: 'limit',
            name: 'Limit',
            editable: true
        },
        {
            key: 'spent',
            name: 'Spent'
        }
    ];

    constructor(props) {
        super(props);

        this.state = {
            columns: this.columns,
            rows: createRows(100)
        };
    }

    render() {
        return (
            <BaseTable
                columns={this.state.columns}
                rows={this.state.rows} />
        );
    }
}