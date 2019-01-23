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
    const { dialogName, handleClose } = this.props;

    this.reset();
    handleClose(dialogName);
  }

  handleSubmit = () => {
    const { handleSubmit, month, year } = this.props;
    const {
      pk, group, name, limit,
    } = this.state;

    handleSubmit(
      {
        pk,
        budget_month: month,
        budget_year: year,
        category: name,
        group,
        limit,
      },
      this.onCallSuccess,
      this.onCallFailure,
    );
  }

  handleDelete = () => {
    const { handleDelete } = this.props;
    const { pk } = this.state;

    handleDelete(pk, this.onCallSuccess, this.onCallFailure);
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
      budget, classes, dialogText, handleDelete, submitAction,
    } = this.props;
    const {
      apiError, confirmOpen, error, group, limit, name,
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
        onClick={this.handleSubmit}
      >
        {submitAction}
      </Button>,
    ];

    if (handleDelete) {
      actions.push(
        <Button
          key="delete"
          onClick={this.handleClickDelete}
          className={classes.deleteButton}
        >
          Delete
        </Button>,
      );
    }

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
      <div>
        <Dialog
          open
          classes={{
            paper: classes.paper,
          }}
        >
          <DialogTitle>
            {`${submitAction} Budget Category`}
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
              <CreatableSelect
                value={
                  // Only return an object if group has a value, so
                  // that the placeholder shows appropriately.
                  group && {
                    value: group,
                    label: group,
                  }
                }
                isClearable
                onChange={this.handleGroupChange}
                options={groupItems}
                label="Group"
                placeholder="Select a group"
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
        <ConfirmationDialog
          title="Deletion Confirmation"
          description="Are you sure you want to delete this category?"
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
    budget_category_groups: PropTypes.object.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    input: PropTypes.string.isRequired,
  }).isRequired,
  dialogName: PropTypes.string.isRequired,
  dialogText: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
  initData: PropTypes.shape({
    category: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    pk: PropTypes.number,
  }),
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  submitAction: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

TransactionDialog.defaultProps = {
  initData: {
    group: '',
    category: '',
    limit: 0,
  },
  handleDelete: null,
};

export default withStyles(styles)(TransactionDialog);
