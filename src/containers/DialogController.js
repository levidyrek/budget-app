import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DialogController from '../components/DialogController';

const mapStateToProps = state => ({
  dialogs: state.dialogs,
});

export default withRouter(connect(mapStateToProps)(DialogController));
