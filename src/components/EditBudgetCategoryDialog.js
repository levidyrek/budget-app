import React from 'react';
import PropTypes from 'prop-types';

import BudgetCategoryDialog from '../containers/BudgetCategoryDialog';

export const EDIT_BUDGET_CATEGORY_DIALOG = 'EDIT_BUDGET_CATEGORY_DIALOG';

const EditBudgetCategoryDialog = (props) => {
  const { dialogState, handleSubmit } = props;
  const dialogText = 'Modify this category for this month\'s budget.';

  return (
    <BudgetCategoryDialog
      dialogName={EDIT_BUDGET_CATEGORY_DIALOG}
      handleSubmit={handleSubmit}
      submitAction="Update"
      dialogText={dialogText}
      initData={dialogState.data}
    />
  );
};

EditBudgetCategoryDialog.propTypes = {
  dialogState: PropTypes.shape({
    data: PropTypes.shape({
      category: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      limit: PropTypes.number.isRequired,
      spent: PropTypes.number.isRequired,
    }),
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default EditBudgetCategoryDialog;
