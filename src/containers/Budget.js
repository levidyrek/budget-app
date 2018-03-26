import { connect } from 'react-redux'
import Budget from '../components/Budget'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode,
        navbarEnabled: state.navbarEnabled
    }
}

export default withRouter(connect(mapStateToProps)(Budget))