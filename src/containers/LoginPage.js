import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import { fetchAuthToken, fetchUserInfo } from '../actions/auth';


const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  fetchUserInfo: () => {
    dispatch(fetchUserInfo());
  },
  fetchAuthToken: (username, password) => {
    dispatch(fetchAuthToken(username, password));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
