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
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
    validate: {
      amount: false,
      payee: false,
      category: false,
      date: false,
    },
    error: {
      amount: '',
      payee: '',
      category: '',
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

  handleCategoryChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handlePayeeChange = (option) => {
    const { validate } = this.state;
    const value = option ? option.value : '';

    this.setState({
      payee: value,
      validate: Object.assign({}, validate, {
        payee: true,
      }),
    });
  }

  handleAmountChange = (event) => {
    const { error, validate } = this.state;

    const amount = event.target.value;
    if (/^[0-9]+(\.[0-9]{2})?$/.test(amount)) {
      this.setState({
        amount,
        validate: Object.assign({}, validate, {
          amount: true,
        }),
        error: Object.assign({}, error, {
          amount: '',
        }),
      });
    } else {
      this.setState({
        amount,
        validate: Object.assign({}, validate, {
          amount: false,
        }),
        error: Object.assign({}, error, {
          amount: 'Not a valid amount.',
        }),
      });
    }
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
      amount, apiError, category, confirmOpen, error, payee,
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
              onChange={this.handleMoneyChange}
              value={amount}
              className={classes.input}
              InputProps={{
                inputComponent: MoneyFormat,
              }}
            />
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
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select
                value={category}
                onChange={this.handleCategoryChange}
                inputProps={{
                  name: 'category',
                  id: 'category',
                }}
              >
                {categories}
              </Select>
            </FormControl>
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
