import React from 'react';
import PropTypes from 'prop-types';

import BudgetCategoryDialog from '../containers/BudgetCategoryDialog';

export const EDIT_BUDGET_CATEGORY_DIALOG = 'EDIT_BUDGET_CATEGORY_DIALOG';

const EditBudgetCategoryDialog = (props) => {
  const { handleSubmit } = props;
  const dialogText = 'Create a new category for your monthly budget.';

  return (
    <BudgetCategoryDialog
      dialogName={EDIT_BUDGET_CATEGORY_DIALOG}
      handleSubmit={handleSubmit}
      submitAction="Update"
      dialogText={dialogText}
    />
  );
};

EditBudgetCategoryDialog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default EditBudgetCategoryDialog;
