import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Register from '../components/Register';
import { registerUser } from '../actions/auth';


const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  registerUser: (username, email, password) => {
    dispatch(registerUser(username, email, password));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
