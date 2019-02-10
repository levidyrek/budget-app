import React from 'react';
import PropTypes from 'prop-types';

import TransactionDialog from '../containers/TransactionDialog';

const AddTransactionDialog = (props) => {
  const dialogText = 'Add a new transaction.';

  return (
    <TransactionDialog
      submitAction="Add"
      dialogText={dialogText}
      {...props}
    />
  );
};

AddTransactionDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddTransactionDialog;
