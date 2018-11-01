import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';


const mapStateToProps = state => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(PrivateRoute));
