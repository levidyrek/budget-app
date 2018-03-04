import React, {Component} from 'react';
import './stylesheets/BaseTable.css';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


export default class BaseTable extends Component {
    onClickCell = (event) => {

    };

    render() {
        return (
            <ReactTable
                data={this.props.rows}
                columns={this.props.columns}
                defaultPageSize={10}
                className="-striped -highlight"
                showPagination={false}
                />
        );
    }
}