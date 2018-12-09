import React from 'react';
import PropTypes from 'prop-types';

import AddBudgetCategoryDialog from '../containers/AddBudgetCategoryDialog';
import { ADD_BUDGET_CATEGORY_DIALOG } from './AddBudgetCategoryDialog';

const DialogController = (props) => {
  const { dialogs } = props;

  return (
    <div>
      {
        dialogs[ADD_BUDGET_CATEGORY_DIALOG]
        && <AddBudgetCategoryDialog />
      }
    </div>
  );
};

DialogController.propTypes = {
  dialogs: PropTypes.shape({
    [ADD_BUDGET_CATEGORY_DIALOG]: PropTypes.bool,
  }),
};

DialogController.defaultProps = {
  dialogs: {
    [ADD_BUDGET_CATEGORY_DIALOG]: false,
  },
};

export default DialogController;
