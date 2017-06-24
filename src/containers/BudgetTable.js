import { connect } from 'react-redux';
import BaseTable from '../components/table/BaseTable';


function createRows(numberOfRows) {
    let rows = [];
    for (let i = 1; i < numberOfRows; i++) {
        rows.push({
            group: ['Mandatory', 'Living Expenses', 'Misc', 'Entertainment'][Math.floor((Math.random() * 3) + 1)],
            category: 'Category ' + i,
            limit: Math.floor((Math.random() * 1200) + 1),
            spent: 0
        });
    }
    return rows;
}

const columns = [
        {
            key: 'group',
            name: 'Group',
            editable: true
        },
        {
            key: 'category',
            name: 'Category',
            editable: true
        },
        {
            key: 'limit',
            name: 'Limit',
            editable: true
        },
        {
            key: 'spent',
            name: 'Spent'
        }
];

const mapStateToProps = state => {
    return {
        rows: createRows(100),
        columns
    };
};

export default connect(mapStateToProps)(BaseTable);