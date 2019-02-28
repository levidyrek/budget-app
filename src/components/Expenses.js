import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import FlashIcon from '@material-ui/icons/FlashOn';

import DetailsPanel from '../containers/DetailsPanel';
import ExpenseTable from '../containers/ExpenseTable';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';


const speedDialActions = [
  { icon: <FileCopyIcon />, name: 'Copy Previous Month\'s budget' },
];

class Expenses extends Component {
  state = {
    open: false,
    hidden: false,
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
    if (!this.state.hidden) {
      this.setState({
        open: true,
      });
    }
  };

  render() {
    const { open } = this.state;

    const buttons = [(
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        icon={<FlashIcon />}
        onBlur={this.handleCloseSpeedDial}
        onClick={this.handleClickSpeedDial}
        onClose={this.handleCloseSpeedDial}
        onFocus={this.handleOpenSpeedDial}
        onMouseEnter={this.handleOpenSpeedDial}
        onMouseLeave={this.handleCloseSpeedDial}
        open={open}
      >
        {speedDialActions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={this.handleClick}
          />
        ))}
      </SpeedDial>
    )];

    return (
      <DetailsPanel
        table={<ExpenseTable />}
        handleClickAdd={this.handleClickAdd}
        buttons={buttons}
      />
    );
  }
}

Expenses.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default Expenses;
