import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import PropTypes from 'prop-types';

import './stylesheets/BaseTable.css';


class BaseTable extends Component {
  getTrProps = (state, rowInfo) => {
    const { handleRowClick } = this.props;

    return {
      onClick: (e, handleOriginal) => {
        if (handleRowClick) {
          handleRowClick(rowInfo.original);
        }
        if (handleOriginal) {
          handleOriginal();
        }
      },
    };
  }

  render() {
    const { columns, rows } = this.props;

    return (
      <ReactTable
        data={rows}
        columns={columns}
        defaultPageSize={25}
        minRows={25}
        className="-striped -highlight"
        getTrProps={this.getTrProps}
      />
    );
  }
}

BaseTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRowClick: PropTypes.func,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

BaseTable.defaultProps = {
  handleRowClick: null,
};

export default BaseTable;
