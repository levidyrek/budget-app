import React from 'react';
import PropTypes from 'prop-types';

import AddBudgetCategoryDialog from '../containers/AddBudgetCategoryDialog';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';
import EditBudgetCategoryDialog from '../containers/EditBudgetCategoryDialog';
import { EDIT_BUDGET_CATEGORY_DIALOG } from './EditBudgetCategoryDialog';

const dialogs = {};

export function registerDialog(dialog) {
  dialogs.push(dialog);
}

const DialogController = (props) => {
  const { dialogState } = props;

  return (
    <div>
      {
        dialogState[ADD_BUDGET_CATEGORY_DIALOG].show
        && <AddBudgetCategoryDialog />
      }
      {
        dialogState[EDIT_BUDGET_CATEGORY_DIALOG].show
        && <EditBudgetCategoryDialog />
      }
    </div>
  );
};

const dialogShape = PropTypes.shape({
  show: PropTypes.bool,
});

DialogController.propTypes = {
  dialogState: PropTypes.shape({
    [ADD_BUDGET_CATEGORY_DIALOG]: dialogShape,
    [EDIT_BUDGET_CATEGORY_DIALOG]: dialogShape,
  }),
};

const dialogDefault = {
  show: false,
};

DialogController.defaultProps = {
  dialogState: {
    [ADD_BUDGET_CATEGORY_DIALOG]: dialogDefault,
    [EDIT_BUDGET_CATEGORY_DIALOG]: dialogDefault,
  },
};

export default DialogController;
