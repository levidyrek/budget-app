import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import FlashIcon from '@material-ui/icons/FlashOn';

import DetailsPanel from '../containers/DetailsPanel';
import ExpenseTable from '../containers/ExpenseTable';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';
import ConfirmationDialog from './ConfirmationDialog';


class Expenses extends Component {
  state = {
    open: false,
    hidden: false,
    confirmOpen: false,
  };

  handleClickAdd = () => {
    const { dispatch } = this.props;

    dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
  }

  handleClickSpeedDial = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleCloseSpeedDial = () => {
    this.setState({
      open: false,
    });
  };

  handleOpenSpeedDial = () => {
    const { hidden } = this.state;
    if (!hidden) {
      this.setState({
        open: true,
      });
    }
  };

  openConfirmDialog = () => {
    this.setState({
      confirmOpen: true,
    });
  };

  closeConfirmDialog = () => {
    this.setState({
      confirmOpen: false,
    });
  };

  copyBudget = () => {

  };

  render() {
    const { confirmOpen, open } = this.state;

    const buttons = [(
      <SpeedDial
        ariaLabel="SpeedDial tooltip"
        icon={<FlashIcon />}
        onBlur={this.handleCloseSpeedDial}
        onClick={this.handleClickSpeedDial}
        onClose={this.handleCloseSpeedDial}
        onFocus={this.handleOpenSpeedDial}
        onMouseEnter={this.handleOpenSpeedDial}
        onMouseLeave={this.handleCloseSpeedDial}
        open={open}
      >
        <SpeedDialAction
          key="copy-budget"
          icon={<FileCopyIcon />}
          tooltipTitle="Copy Previous Month's budget"
          tooltipOpen
          onClick={this.openConfirmDialog}
        />
      </SpeedDial>
    )];

    const confirmMsg = 'Are you sure you want to copy last month\'s budget?'
      + ' This month\'s budget will be overwritten.';

    return (
      <DetailsPanel
        table={<ExpenseTable />}
        handleClickAdd={this.handleClickAdd}
        buttons={buttons}
      >
        <ConfirmationDialog
          title="Copy Last Month's Budget"
          description={confirmMsg}
          handleOk={this.copyBudget}
          handleClose={this.closeConfirmDialog}
          open={confirmOpen}
        />
      </DetailsPanel>
    );
  }
}

Expenses.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Expenses;
