import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { withRouter } from 'react-router-dom'
import { fetchAuthToken } from '../actions/auth'


const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAuthToken: (username, password) => {
            dispatch(fetchAuthToken(username, password))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
