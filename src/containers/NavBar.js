import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        floating: state.mobileMode
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))