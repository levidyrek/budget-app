import React from 'react';
import PropTypes from 'prop-types';

import TransactionDialog from '../containers/TransactionDialog';

const EditTransactionDialog = (props) => {
  const { initData, handleDelete, handleSubmit } = props;
  const dialogText = 'Edit this transaction.';

  return (
    <TransactionDialog
      submitAction="Edit"
      dialogText={dialogText}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      initData={initData}
      {...props}
    />
  );
};

EditTransactionDialog.propTypes = {
  initData: PropTypes.shape({
    amount: PropTypes.string.isRequired,
    category: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    payee: PropTypes.string.isRequired,
    pk: PropTypes.number,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default EditTransactionDialog;
