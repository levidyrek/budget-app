import { connect } from 'react-redux';
import BaseTable from '../components/table/BaseTable';


function convertToCategoryRows(budget) {
    let rows = [];
    let budgetCategories = budget.budget_categories;
    for (let pk in budgetCategories) {
        if (budgetCategories.hasOwnProperty(pk)) {
            let category = budgetCategories[pk];
            rows.push({
                group: budget.budget_category_groups[category.group].name,
                category: category.category,
                limit: category.limit,
                spent: category.spent
            });
        }
    }
    return rows;
}

const columns = [
        {
            accessor: 'group',
            Header: 'Group'
        },
        {
            accessor: 'category',
            Header: 'Category'
        },
        {
            accessor: 'limit',
            Header: 'Limit'
        },
        {
            accessor: 'spent',
            Header: 'Spent'
        }
];

const mapStateToProps = state => {
    return {
        rows: convertToCategoryRows(state.selectedBudget.budget),
        columns
    };
};

export default connect(mapStateToProps)(BaseTable);