import { connect } from 'react-redux'
import DetailsPanel from '../components/DetailsPanel'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode
    }
}

export default withRouter(connect(mapStateToProps)(DetailsPanel))