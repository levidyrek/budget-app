import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DetailsPanel from '../containers/DetailsPanel';
import TransactionTable from '../containers/TransactionTable';
import AddTransactionDialog from '../containers/AddTransactionDialog';
import { toggleDialog } from '../actions/dialogs';


class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addDialogOpen: false,
    };
  }

  handleClickAdd = () => {
    this.setState({
      addDialogOpen: true,
    });
  }

  handleCloseAdd = () => {
    this.setState({
      addDialogOpen: false,
    });
  }

  render() {
    const { addDialogOpen } = this.state;

    return (
      <div>
        <DetailsPanel
          table={<TransactionTable />}
          handleClickAdd={this.handleClickAdd}
        >
          <AddTransactionDialog
            open={addDialogOpen}
            handleClose={this.handleCloseAdd}
          />
        </DetailsPanel>
      </div>
    );
  }
}

export default Transactions;
