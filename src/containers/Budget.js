import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Budget from '../components/Budget';


const mapStateToProps = state => ({
  mobileMode: state.mobileMode,
  navbarEnabled: state.navbarEnabled,
});

export default withRouter(connect(mapStateToProps)(Budget));
