import React, { Component } from 'react';

import DetailsPanel from '../containers/DetailsPanel';
import TransactionTable from '../containers/TransactionTable';
import AddTransactionDialog from '../containers/AddTransactionDialog';


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
      <DetailsPanel
        table={<TransactionTable />}
        handleClickAdd={this.handleClickAdd}
      >
        <AddTransactionDialog
          open={addDialogOpen}
          handleClose={this.handleCloseAdd}
        />
      </DetailsPanel>
    );
  }
}

export default Transactions;
