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

import { MoneyFormat } from '../utils/formats';
import CreatableSelect from './CreatableSelect';

import './stylesheets/BudgetCategoryDialog.css';

const styles = () => ({
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

class BudgetCategoryDialog extends Component {
  initialState = {
    pk: null,
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

    // If initial values are passed in, set them to state
    // and mark them as valid.
    let propState = {};
    if (props.initData) {
      const {
        pk, group, category, limit,
      } = props.initData;
      propState = {
        pk,
        group,
        name: category,
        limit,
        validate: {
          group: true,
          name: true,
          limit: true,
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
      budget, classes, dialogText, submitAction,
    } = this.props;
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
        key="submit"
        disabled={!this.inputIsValid()}
        onClick={this.handleSubmit}
      >
        {submitAction}
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
              value={{
                value: group,
                label: group,
              }}
              isClearable
              onChange={this.handleGroupChange}
              options={groupItems}
              label="Group"
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

BudgetCategoryDialog.propTypes = {
  budget: PropTypes.shape({
    budget_category_groups: PropTypes.object.isRequired,
  }).isRequired,
  classes: PropTypes.shape({
    input: PropTypes.string.isRequired,
  }).isRequired,
  dialogName: PropTypes.string.isRequired,
  dialogText: PropTypes.string.isRequired,
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

BudgetCategoryDialog.defaultProps = {
  initData: {
    group: '',
    category: '',
    limit: 0,
  },
};

export default withStyles(styles)(BudgetCategoryDialog);
