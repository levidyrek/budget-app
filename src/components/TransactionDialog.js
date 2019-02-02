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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

import { MoneyFormat } from '../utils/formats';
import CreatableSelect from './CreatableSelect';
import ConfirmationDialog from './ConfirmationDialog';

import './stylesheets/Dialog.css';

const styles = () => ({
  deleteButton: {
    color: red[500],
    '&:hover': {
      backgroundColor: red[50],
    },
  },
  input: {
    marginTop: '20px',
    minWidth: '325px',
  },
  dialogContent: {
    overflowY: 'visible',
  },
  paper: {
    overflowY: 'visible',
  },
});

class TransactionDialog extends Component {
  initialState = {
    pk: null,
    amount: 0,
    payee: '',
    category: null,
    date: null,
    inflow: false,
    validate: {
      amount: false,
      date: false,
    },
    error: {
      amount: '',
      date: '',
    },
    apiError: '',
    confirmOpen: false,
  }

  constructor(props) {
    super(props);

    // If initial values are passed in, set them to state
    // and mark them as valid.
    let propState = {};
    if (props.initData) {
      const {
        amount, category, date, payee, pk,
      } = props.initData;
      propState = {
        amount,
        category,
        date,
        payee,
        pk,
        validate: {
          amount: true,
          category: true,
          date: true,
          payee: true,
        },
      };
    }
    this.state = Object.assign({}, this.initialState, propState);
  }

  handleChange = (name, value, valid = true, errorMsg = '') => {
    const { error, validate } = this.state;

    this.setState({
      [name]: value,
      validate: Object.assign({}, validate, {
        [name]: valid,
      }),
      error: Object.assign({}, error, {
        [name]: errorMsg,
      }),
    });
  }

  handleChangeEvent = (event) => {
    this.handleChange(event.target.name, event.target.value);
  }

  handleCheckedEvent = (event) => {
    this.handleChange(event.target.name, event.target.checked);
  }

  handlePayeeChange = (option) => {
    const value = option ? option.value : '';

    this.handleChange('payee', value);
  }

  handleAmountChange = (event) => {
    const amount = event.target.value;
    let valid = true;
    let error = '';
    if (!/^[0-9]+(\.[0-9]{2})?$/.test(amount)) {
      valid = false;
      error = 'Not a valid amount.';
    }
    this.handleChange('amount', amount, valid, error);
  }

  handleClose = () => {
    const { handleClose } = this.props;

    handleClose();
    this.reset();
  }

  handleCancelDelete = () => {
    this.setState({
      confirmOpen: false,
    });
  }

  handleClickDelete = () => {
    this.setState({
      confirmOpen: true,
    });
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
    const {
      budget, classes, dialogText, open, submitAction,
    } = this.props;
    const {
      amount, apiError, category, confirmOpen, date, error, inflow, payee,
    } = this.state;

    const actions = [
      <Button
        key="cancel"
        onClick={this.handleClose}
      >
        Cancel
      </Button>,
      <Button
        key="submit"
        disabled={!this.inputIsValid()}
        // onClick={this.handleSubmit}
      >
        {submitAction}
      </Button>,
    ];

    // if (handleDelete) {
    //   actions.push(
    //     <Button
    //       key="delete"
    //       onClick={this.handleClickDelete}
    //       className={classes.deleteButton}
    //     >
    //       Delete
    //     </Button>,
    //   );
    // }

    const payeeLookup = budget.payees;
    const payees = [];
    Object.entries(payeeLookup).forEach((item) => {
      const payeeData = item[1];
      payees.push({
        value: payeeData.name,
        label: payeeData.name,
      });
    });

    const categoryLookup = budget.budget_categories;
    const categories = [];
    Object.entries(categoryLookup).forEach((item) => {
      const categoryData = item[1];
      categories.push(
        <MenuItem key={categoryData.pk} value={categoryData.pk}>
          {categoryData.category}
        </MenuItem>,
      );
    });

    return (
      <div>
        <Dialog
          open={open}
          classes={{
            paper: classes.paper,
          }}
        >
          <DialogTitle>
            {`${submitAction} Transaction`}
          </DialogTitle>
          <DialogContent
            className={classes.dialogContent}
          >
            <DialogContentText>
              {dialogText}
            </DialogContentText>
            {
              apiError
              && <div className="error-msg">{apiError}</div>
            }
            <TextField
              label="Amount"
              helperText={error.amount}
              onChange={this.handleAmountChange}
              value={amount}
              className={classes.input}
              InputProps={{
                inputComponent: MoneyFormat,
              }}
            />
            <br />
            <FormControl className={classes.input}>
              <FormControlLabel
                value="inflow"
                control={(
                  <Switch
                    checked={inflow}
                    name="inflow"
                    onChange={this.handleCheckedEvent}
                    color="primary"
                  />
                )}
                label="Inflow"
              />
            </FormControl>
            <br />
            <FormControl className={classes.input}>
              <CreatableSelect
                value={
                  // Only return an object if payee has a value, so
                  // that the placeholder shows appropriately.
                  payee && {
                    value: payee,
                    label: payee,
                  }
                }
                isClearable
                onChange={this.handlePayeeChange}
                options={payees}
                label="Payee"
                placeholder="Select a payee"
              />
            </FormControl>
            <br />
            <FormControl className={classes.input}>
              <InputLabel htmlFor="category" shrink>Category</InputLabel>
              <Select
                value={category}
                onChange={this.handleChangeEvent}
                inputProps={{
                  name: 'category',
                  id: 'category',
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select a category
                </MenuItem>
                {categories}
              </Select>
            </FormControl>
            <br />
            <TextField
              id="date"
              label="Date"
              type="date"
              name="date"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.input}
              value={date}
              onChange={this.handleChangeEvent}
            />
          </DialogContent>
          <DialogActions>
            {actions}
          </DialogActions>
        </Dialog>
        <ConfirmationDialog
          title="Deletion Confirmation"
          description="Are you sure you want to delete this transaction?"
          handleOk={this.handleDelete}
          handleClose={this.handleCancelDelete}
          open={confirmOpen}
        />
      </div>
    );
  }
}

TransactionDialog.propTypes = {
  budget: PropTypes.shape({
    budget_categories: PropTypes.object.isRequired,
    payees: PropTypes.object.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    input: PropTypes.string.isRequired,
  }).isRequired,
  dialogText: PropTypes.string.isRequired,
  // handleDelete: PropTypes.func,
  initData: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    payee: PropTypes.string.isRequired,
    pk: PropTypes.number,
  }),
  handleClose: PropTypes.func.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  submitAction: PropTypes.string.isRequired,
};

TransactionDialog.defaultProps = {
  initData: {
    amount: 0,
    category: '',
    date: '',
    payee: '',
  },
  // handleDelete: null,
};

export default withStyles(styles)(TransactionDialog);
