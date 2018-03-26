import { connect } from 'react-redux'
import Expenses from '../components/Expenses'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        budgets: state.budgets,
        selectedBudget: state.selectedBudget
    }
}

export default withRouter(connect(mapStateToProps)(Expenses))