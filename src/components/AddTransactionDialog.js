import React from 'react';
import PropTypes from 'prop-types';

import TransactionDialog from '../containers/TransactionDialog';

const AddTransactionDialog = (props) => {
  const dialogText = 'Create a new transaction for your monthly budget.';

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
