import { connect } from 'react-redux';
import Expenses from '../components/Expenses'


const mapStateToProps = state => {
    return {
        budgets: state.budgets,
        selectedBudget: state.selectedBudget
    };
};

export default connect(mapStateToProps)(Expenses);