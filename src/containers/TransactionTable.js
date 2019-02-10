import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TransactionTable from '../components/table/TransactionTable';


const getCategoryRenderer = budget => row => (
  budget.budget_categories[row.value].category
);

function convertToTransactionRows(budget) {
  const rows = [];
  Object.values(budget.transactions).forEach((transaction) => {
    rows.push({
      pk: transaction.pk,
      amount: transaction.amount,
      payee: transaction.payee,
      budget_category: transaction.budget_category,
      date: transaction.date,
      inflow: transaction.inflow,
    });
  });
  return rows;
}

const mapStateToProps = state => ({
  categoryRenderer: getCategoryRenderer(state.selectedBudget.budget),
  rows: convertToTransactionRows(state.selectedBudget.budget),
});

export default withRouter(connect(mapStateToProps)(TransactionTable));
