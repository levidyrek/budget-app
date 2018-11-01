import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';


const mapStateToProps = state => ({
  floating: state.mobileMode,
});

export default withRouter(connect(mapStateToProps)(NavBar));
