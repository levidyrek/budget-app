import { connect } from 'react-redux'
import PrivateRoute from '../components/PrivateRoute'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))