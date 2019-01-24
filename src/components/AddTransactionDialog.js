import React from 'react';
import PropTypes from 'prop-types';

import TransactionDialog from '../containers/TransactionDialog';

export const ADD_TRANSACTION_DIALOG = 'ADD_TRANSACTION_DIALOG';

const AddTransactionDialog = (props) => {
  const { dialogState, handleDelete, handleSubmit } = props;
  const dialogText = 'Modify this transaction for this month\'s budget.';

  return (
    <TransactionDialog
      dialogName={ADD_TRANSACTION_DIALOG}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      submitAction="Create"
      dialogText={dialogText}
      initData={dialogState.data}
    />
  );
};

AddTransactionDialog.propTypes = {
  dialogState: PropTypes.shape({
    data: PropTypes.shape({
      category: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      limit: PropTypes.number.isRequired,
      spent: PropTypes.number.isRequired,
    }),
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddTransactionDialog;
