import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BudgetTable from '../components/table/BudgetTable';


function convertToCategoryRows(budget) {
  const rows = [];
  const budget_categories = budget.budget_categories;
  Object.values(budget_categories).forEach((category) => {
    rows.push({
      pk: category.pk,
      group: budget.budget_category_groups[category.group].name,
      category: category.category,
      limit: parseFloat(category.limit),
      spent: parseFloat(category.spent),
    });
  });
  return rows;
}

const mapStateToProps = state => ({
  rows: convertToCategoryRows(state.selectedBudget.budget),
});

export default withRouter(connect(mapStateToProps)(BudgetTable));
