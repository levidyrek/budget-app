import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorDialog from '../components/ErrorDialog';
import { hideErrorDialog } from '../actions/dialogs';


const mapStateToProps = state => ({
  error: state.errorDialog.error,
});

const mapDispatchToProps = dispatch => ({
  handleClose: () => {
    dispatch(hideErrorDialog());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ErrorDialog));
