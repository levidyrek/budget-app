import React, {Component} from 'react';
import './stylesheets/AddBudgetCategoryDialog.css';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export const ADD_BUDGET_CATEGORY_DIALOG = 'ADD_BUDGET_CATEGORY_DIALOG';

export default class AddBudgetCategoryDialog extends Component {

    initialState = {
        group: 0,
        name: '',
        limit: 0,
        validate: {
            group: false,
            name: false,
            limit: true
        },
        error: {
            name: '',
            limit: ''
        },
        apiError: ''
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    dialogStyle = {
        width: 'auto',
        maxWidth: '350px'
    };

    handleGroupChange = (event, index, group) => {
        let validate = Object.assign({}, this.state.validate, {
            group: true
        });
        this.setState({
            group,
            validate
        });
    };

    handleNameChange = (event) => {
        let name = event.target.value;
        if (name) {
            let validate = Object.assign({}, this.state.validate, {
                name: true
            });
            let error = Object.assign({}, this.state.error, {
                name: ''
            });
            this.setState({
                name,
                validate,
                error
            });
        } else {
            let validate = Object.assign({}, this.state.validate, {
                name: false
            });
            let error = Object.assign({}, this.state.error, {
                name: 'This field is required.'
            });
            this.setState({
                validate,
                error,
                name: ''
            });
        }
    };

    handleLimitChange = (event) => {
        let limit = event.target.value;
        if (/^[0-9]+(\.[0-9]{2})?$/.test(limit)) {
            let validate = Object.assign({}, this.state.validate, {
                limit: true
            });
            let error = Object.assign({}, this.state.error, {
                limit: ''
            });
            this.setState({
                limit,
                validate,
                error
            });
        } else {
            let validate = Object.assign({}, this.state.validate, {
                limit: false
            });
            let error = Object.assign({}, this.state.error, {
                limit: 'Not a valid amount.'
            });
            this.setState({
                limit,
                validate,
                error
            });
        }
    };

    inputIsValid() {
        const values = this.state.validate;
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                if (!values[key] && values[key] !== 0) {
                    return false;
                }
            }
        }
        return true;
    }

    reset() {
        this.setState(this.initialState);
    }

    handleClose = () => {
        this.reset();
        this.props.handleClose();
    };

    handleAdd = () => {
        this.props.handleSubmit({
            category: this.state.name,
            group: this.state.group,
            limit: this.state.limit
        }, this.onCallSuccess, this.onCallFailure);
    };

    onCallSuccess = () => {
        this.handleClose();
    };

    onCallFailure = (error) => {
        this.setState({
            apiError: error
        });
    };

    render() {
        const actions = [
            <FlatButton
                label='Cancel'
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label='Add'
                primary={true}
                disabled={!this.inputIsValid()}
                onTouchTap={this.handleAdd}
            />,
        ];

        const groups = this.props.budget.budget_category_groups;
        const groupItems = [];
        for (let key in groups) {
            if (groups.hasOwnProperty(key)) {
                groupItems.push(
                    <MenuItem key={key} value={key} primaryText={groups[key].name} />
                );
            }
        }

        return (
            <Dialog
                title='New Budget Category'
                actions={actions}
                modal={true}
                open={true}
                contentStyle={this.dialogStyle}
            >
                <TextField
                    hintText='Category'
                    errorText={this.state.error.name}
                    onChange={this.handleNameChange}
                    value={this.state.name}
                />
                <br />
                <SelectField
                    floatingLabelText='Group'
                    onChange={this.handleGroupChange}
                    value={this.state.group}
                >
                    {groupItems}
                </SelectField>
                <br />
                <TextField
                    hintText='Limit'
                    type='number'
                    step='.01'
                    errorText={this.state.error.limit}
                    onChange={this.handleLimitChange}
                    value={this.state.limit}
                />
                <div className='msg'>{this.state.apiError}</div>
            </Dialog>
        );
    }
}