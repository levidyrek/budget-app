import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { logout } from '../actions/auth';


const mapStateToProps = state => ({
  mobileMode: state.mobileMode,
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
