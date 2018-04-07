import { connect } from 'react-redux'
import ErrorDialog from '../components/ErrorDialog'
import { hideErrorDialog } from '../actions/dialogs'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {
        error: state.errorDialog.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleClose: () => {
            dispatch(hideErrorDialog())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorDialog))
