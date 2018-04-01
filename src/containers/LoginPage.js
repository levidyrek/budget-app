import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { withRouter } from 'react-router-dom'
import { fetchAuthToken, fetchUserInfo } from '../actions/auth'


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserInfo: () => {
            dispatch(fetchUserInfo())
        },
        fetchAuthToken: (username, password) => {
            dispatch(fetchAuthToken(username, password))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
