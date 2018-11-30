import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/lib/Creatable';

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

    handleGroupChange = (option) => {
      const { validate } = this.state;
      const value = option ? option.value : '';

      this.setState({
        group: value,
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
      const { handleClose } = this.props;

      this.reset();
      handleClose();
    }

    handleAdd = () => {
      const { budget, handleSubmit } = this.props;
      const { group, name, limit } = this.state;

      handleSubmit(
        {
          budget_month: budget.month,
          budget_year: budget.year,
          category: name,
          group,
          limit,
        },
        this.onCallSuccess,
        this.onCallFailure,
      );
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
      const {
        apiError, error, group, limit, name,
      } = this.state;

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
        const itemGroup = item[1];
        groupItems.push({
          value: itemGroup.name,
          label: itemGroup.name,
        });
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
              apiError
              && <div className="error-msg">{apiError}</div>
            }
            <TextField
              label="Category"
              helperText={error.name}
              onChange={this.handleNameChange}
              value={name}
              className={classes.input}
              inputProps={{
                maxLength: '50',
              }}
            />
            <br />
            <FormControl className={classes.input}>
              <InputLabel htmlFor="group">Group</InputLabel>
              <CreatableSelect
                value={{
                  value: group,
                  label: group,
                }}
                isClearable
                onChange={this.handleGroupChange}
                options={groupItems}
              />
            </FormControl>
            <br />
            <TextField
              label="Limit"
              helperText={error.limit}
              onChange={this.handleLimitChange}
              value={limit}
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

AddBudgetCategoryDialog.propTypes = {
  budget: PropTypes.shape({
    budget_category_groups: PropTypes.object.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    input: PropTypes.string.isRequired,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddBudgetCategoryDialog);
