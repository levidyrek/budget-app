import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TransactionTable from '../components/table/TransactionTable';


function convertToTransactionRows(budget) {
  const rows = [];
  Object.values(budget.transactions).forEach((transaction) => {
    rows.push({
      pk: transaction.pk,
      amount: transaction.amount,
      payee: transaction.payee,
      budget_category: budget.budget_categories[transaction.budget_category].category,
      date: transaction.date,
      inflow: transaction.inflow,
    });
  });
  return rows;
}

const mapStateToProps = state => ({
  rows: convertToTransactionRows(state.selectedBudget.budget),
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionTable));
