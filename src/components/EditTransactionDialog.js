import React from 'react';
import PropTypes from 'prop-types';

import TransactionDialog from '../containers/TransactionDialog';

const EditTransactionDialog = (props) => {
  const { handleDelete, handleSubmit } = props;
  const dialogText = 'Edit this transaction.';

  return (
    <TransactionDialog
      submitAction="Edit"
      dialogText={dialogText}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      {...props}
    />
  );
};

EditTransactionDialog.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default EditTransactionDialog;
