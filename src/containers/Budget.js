import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Budget from '../components/Budget';
import { enableMobileMode } from '../actions/responsive';


const mapStateToProps = state => ({
  mobileMode: state.mobileMode,
  navbarEnabled: state.navbarEnabled,
});

const mapDispatchToProps = dispatch => ({
  enableMobileMode: (enable) => dispatch(enableMobileMode(enable)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Budget));
