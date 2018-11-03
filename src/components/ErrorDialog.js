import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

export default class DialogExampleModal extends React.Component {
  render() {
    const actions = [
      <Button
        label="Okay"
        primary
        onClick={this.props.handleClose}
      />,
    ];

    return (
      <Dialog
        title="Error"
        actions={actions}
        modal
        open={this.props.error.length > 0}
      >
        {this.props.error}
      </Dialog>
    );
  }
}
