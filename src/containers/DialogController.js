import { connect } from 'react-redux'
import DialogController from '../components/DialogController'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

export default withRouter(connect(mapStateToProps)(DialogController))