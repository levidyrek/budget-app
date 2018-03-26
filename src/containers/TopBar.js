import { connect } from 'react-redux'
import TopBar from '../components/TopBar'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode
    }
}

export default withRouter(connect(mapStateToProps)(TopBar))