import React from 'react';
import PropTypes from 'prop-types';

import AddBudgetCategoryDialog from '../containers/AddBudgetCategoryDialog';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import EditBudgetCategoryDialog from '../containers/EditBudgetCategoryDialog';
import { EDIT_BUDGET_CATEGORY_DIALOG } from './EditBudgetCategoryDialog';

const DialogController = (props) => {
  const { dialogs } = props;

  return (
    <div>
      {
        dialogs[ADD_BUDGET_CATEGORY_DIALOG]
        && <AddBudgetCategoryDialog />
      }
      {
        dialogs[EDIT_BUDGET_CATEGORY_DIALOG]
        && <EditBudgetCategoryDialog />
      }
    </div>
  );
};

DialogController.propTypes = {
  dialogs: PropTypes.shape({
    [ADD_BUDGET_CATEGORY_DIALOG]: PropTypes.bool,
    [EDIT_BUDGET_CATEGORY_DIALOG]: PropTypes.bool,
  }),
};

DialogController.defaultProps = {
  dialogs: {
    [ADD_BUDGET_CATEGORY_DIALOG]: false,
    [EDIT_BUDGET_CATEGORY_DIALOG]: false,
  },
};

export default DialogController;
