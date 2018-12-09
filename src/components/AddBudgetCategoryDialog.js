import React from 'react';
import PropTypes from 'prop-types';

import BudgetCategoryDialog from '../containers/BudgetCategoryDialog';

export const ADD_BUDGET_CATEGORY_DIALOG = 'ADD_BUDGET_CATEGORY_DIALOG';

const AddBudgetCategoryDialog = (props) => {
  const { handleSubmit } = props;
  return (
    <BudgetCategoryDialog
      dialogName={ADD_BUDGET_CATEGORY_DIALOG}
      handleSubmit={handleSubmit}
    />
  );
};

AddBudgetCategoryDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddBudgetCategoryDialog;
