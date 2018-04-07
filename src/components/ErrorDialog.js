import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class DialogExampleModal extends React.Component {

    render() {
        const actions = [
            <FlatButton
                label="Okay"
                primary={true}
                onClick={this.props.handleClose}
            />
        ];

        return (
            <Dialog
                title="Error"
                actions={actions}
                modal={true}
                open={this.props.error.length > 0}
            >
                {this.props.error}
            </Dialog>
        );
    }
}