import React, {Component} from 'react'
import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

import './stylesheets/AddBudgetCategoryDialog.css'

export const ADD_BUDGET_CATEGORY_DIALOG = "ADD_BUDGET_CATEGORY_DIALOG"

const styles = theme => ({
    input: {
        marginTop: '20px',
        minWidth: '200px',
    },
})

class AddBudgetCategoryDialog extends Component {

    initialState = {
        group: '',
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
    }

    constructor(props) {
        super(props)
        this.state = this.initialState
    }

    handleGroupChange = event => {
        let validate = Object.assign({}, this.state.validate, {
            group: true
        })
        this.setState({
            group: event.target.value,
            validate
        })
    }

    handleNameChange = (event) => {
        let name = event.target.value
        if (name) {
            let validate = Object.assign({}, this.state.validate, {
                name: true
            })
            let error = Object.assign({}, this.state.error, {
                name: ''
            })
            this.setState({
                name,
                validate,
                error
            })
        } else {
            let validate = Object.assign({}, this.state.validate, {
                name: false
            })
            let error = Object.assign({}, this.state.error, {
                name: 'This field is required.'
            })
            this.setState({
                validate,
                error,
                name: ''
            })
        }
    }

    handleLimitChange = (event) => {
        let limit = event.target.value
        if (/^[0-9]+(\.[0-9]{2})?$/.test(limit)) {
            let validate = Object.assign({}, this.state.validate, {
                limit: true
            })
            let error = Object.assign({}, this.state.error, {
                limit: ''
            })
            this.setState({
                limit,
                validate,
                error
            })
        } else {
            let validate = Object.assign({}, this.state.validate, {
                limit: false
            })
            let error = Object.assign({}, this.state.error, {
                limit: 'Not a valid amount.'
            })
            this.setState({
                limit,
                validate,
                error
            })
        }
    }

    inputIsValid() {
        const values = this.state.validate
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                if (!values[key] && values[key] !== 0) {
                    return false
                }
            }
        }
        return true
    }

    reset() {
        this.setState(this.initialState)
    }

    handleClose = () => {
        this.reset()
        this.props.handleClose()
    }

    handleAdd = () => {
        this.props.handleSubmit({
            category: this.state.name,
            group: this.state.group,
            limit: this.state.limit
        }, this.onCallSuccess, this.onCallFailure)
    }

    onCallSuccess = () => {
        this.handleClose()
    }

    onCallFailure = (error) => {
        this.setState({
            apiError: error
        })
    }

    render() {
        const { classes } = this.props;

        const actions = [
            <Button
                key='cancel'
                onClick={this.handleClose}
            >
                Cancel
            </Button>,
            <Button
                key='add'
                disabled={!this.inputIsValid()}
                onClick={this.handleAdd}
            >
                Add
            </Button>,
        ]

        const groups = this.props.budget.budget_category_groups
        const groupItems = []
        for (let key in groups) {
            if (groups.hasOwnProperty(key)) {
                groupItems.push(
                    <MenuItem key={key} value={key}>
                        {groups[key].name}
                    </MenuItem>
                )
            }
        }

        return (
            <Dialog
                open={true}
                className='AddBudgetCategoryDialog'
            >
                <DialogTitle>Add Budget Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create a new category for your monthly budgets.
                    </DialogContentText>
                    <TextField
                        label='Category'
                        helperText={this.state.error.name}
                        onChange={this.handleNameChange}
                        value={this.state.name}
                        className={classes.input}
                    />
                    <br />
                    <FormControl className={classes.input}>
                        <InputLabel htmlFor='group'>Group</InputLabel>
                        <Select
                            label='Group'
                            onChange={this.handleGroupChange}
                            value={this.state.group}
                            inputProps={{
                                name: 'group',
                                id: 'group'
                            }}
                        >
                            {groupItems}
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        label='Limit'
                        type='number'
                        step='.01'
                        helperText={this.state.error.limit}
                        onChange={this.handleLimitChange}
                        value={this.state.limit}
                        className={classes.input}
                    />
                    <div className='msg'>{this.state.apiError}</div>
                </DialogContent>
                <DialogActions>
                    {actions}
                </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(AddBudgetCategoryDialog)
