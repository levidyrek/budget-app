import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../components/Register';
import { fetchAuthToken, fetchUserInfo } from '../actions/auth';


const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
