import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { MoneyFormat } from '../utils/formats';

import './stylesheets/AddBudgetCategoryDialog.css';

export const ADD_BUDGET_CATEGORY_DIALOG = 'ADD_BUDGET_CATEGORY_DIALOG';

const styles = () => ({
  input: {
    marginTop: '20px',
    minWidth: '325px',
  },
});

class AddBudgetCategoryDialog extends Component {
    initialState = {
      group: '',
      name: '',
      limit: 0,
      validate: {
        group: false,
        name: false,
        limit: true,
      },
      error: {
        name: '',
        limit: '',
      },
      apiError: '',
    }

    constructor(props) {
      super(props);
      this.state = this.initialState;
    }

    handleGroupChange = (event) => {
      const { validate } = this.state;

      this.setState({
        group: event.target.value,
        validate: Object.assign({}, validate, {
          group: true,
        }),
      });
    }

    handleNameChange = (event) => {
      const { error, validate } = this.state;

      const name = event.target.value;
      if (name) {
        this.setState({
          name,
          validate: Object.assign({}, validate, {
            name: true,
          }),
          error: Object.assign({}, error, {
            name: '',
          }),
        });
      } else {
        this.setState({
          validate: Object.assign({}, validate, {
            name: false,
          }),
          error: Object.assign({}, error, {
            name: 'This field is required.',
          }),
          name: '',
        });
      }
    }

    handleLimitChange = (event) => {
      const { error, validate } = this.state;

      const limit = event.target.value;
      if (/^[0-9]+(\.[0-9]{2})?$/.test(limit)) {
        this.setState({
          limit,
          validate: Object.assign({}, validate, {
            limit: true,
          }),
          error: Object.assign({}, error, {
            limit: '',
          }),
        });
      } else {
        this.setState({
          limit,
          validate: Object.assign({}, validate, {
            limit: false,
          }),
          error: Object.assign({}, error, {
            limit: 'Not a valid amount.',
          }),
        });
      }
    }

    handleClose = () => {
      this.reset();
      this.props.handleClose();
    }

    handleAdd = () => {
      this.props.handleSubmit({
        category: this.state.name,
        group: this.state.group,
        limit: this.state.limit,
      }, this.onCallSuccess, this.onCallFailure);
    }

    onCallSuccess = () => {
      this.handleClose();
    }

    onCallFailure = (error) => {
      this.setState({
        apiError: error,
      });
    }

    inputIsValid() {
      const { validate } = this.state;

      const invalid = Object.values(validate).some(valid => !valid);
      return !invalid;
    }

    reset() {
      this.setState(this.initialState);
    }

    render() {
      const { budget, classes } = this.props;

      const actions = [
        <Button
          key="cancel"
          onClick={this.handleClose}
        >
                Cancel
        </Button>,
        <Button
          key="add"
          disabled={!this.inputIsValid()}
          onClick={this.handleAdd}
        >
                Add
        </Button>,
      ];

      const groups = budget.budget_category_groups;
      const groupItems = [];
      Object.entries(groups).forEach((item) => {
        const id = item[0];
        const group = item[1];
        groupItems.push(
          <MenuItem key={id} value={id}>
            {group.name}
          </MenuItem>,
        );
      });

      return (
        <Dialog
          open
          className="AddBudgetCategoryDialog"
        >
          <DialogTitle>Add Budget Category</DialogTitle>
          <DialogContent>
            <DialogContentText>
                        Create a new category for your monthly budgets.
            </DialogContentText>
            {
                        this.state.apiError
                        && <div className="error-msg">{this.state.apiError}</div>
                    }
            <TextField
              label="Category"
              helperText={this.state.error.name}
              onChange={this.handleNameChange}
              value={this.state.name}
              className={classes.input}
              inputProps={{
                maxLength: '50',
              }}
            />
            <br />
            <FormControl className={classes.input}>
              <InputLabel htmlFor="group">Group</InputLabel>
              <Select
                label="Group"
                onChange={this.handleGroupChange}
                value={this.state.group}
                inputProps={{
                  name: 'group',
                  id: 'group',
                }}
              >
                {groupItems}
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Limit"
              helperText={this.state.error.limit}
              onChange={this.handleLimitChange}
              value={this.state.limit}
              className={classes.input}
              InputProps={{
                inputComponent: MoneyFormat,
              }}
            />
          </DialogContent>
          <DialogActions>
            {actions}
          </DialogActions>
        </Dialog>
      );
    }
}

export default withStyles(styles)(AddBudgetCategoryDialog);
