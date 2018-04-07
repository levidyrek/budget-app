import { connect } from 'react-redux'
import TopBar from '../components/TopBar'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/auth'


const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logout())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar))