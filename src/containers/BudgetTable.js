import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BaseTable from '../components/table/BaseTable';

import { moneyRenderer } from '../utils/renderers';


function convertToCategoryRows(budget) {
  const rows = [];
  const budgetCategories = budget.budget_categories;
  Object.values(budgetCategories).forEach((category) => {
    rows.push({
      group: budget.budget_category_groups[category.group].name,
      category: category.category,
      limit: parseFloat(category.limit),
      spent: parseFloat(category.spent),
    });
  });
  return rows;
}

const columns = [
  {
    accessor: 'group',
    Header: 'Group',
  },
  {
    accessor: 'category',
    Header: 'Category',
  },
  {
    accessor: 'limit',
    className: 'money',
    Header: 'Limit',
    Cell: moneyRenderer,
  },
  {
    accessor: 'spent',
    className: 'money',
    Header: 'Spent',
    Cell: moneyRenderer,
  },
];

const mapStateToProps = state => ({
  rows: convertToCategoryRows(state.selectedBudget.budget),
  columns,
});

export default withRouter(connect(mapStateToProps)(BaseTable));
