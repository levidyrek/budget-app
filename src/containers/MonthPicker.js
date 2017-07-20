import { connect } from 'react-redux';
import MonthPicker from '../components/MonthPicker';
import { fetchSelectedBudget } from '../actions/budgets';


const mapStateToProps = state => {
    return {
        budgets: state.budgets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeMonth: (month, url) => {
            dispatch(fetchSelectedBudget(month, url));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MonthPicker);