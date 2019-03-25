import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

import { toggleNavBar } from '../actions/responsive';


const mapStateToProps = state => ({
  floating: state.mobileMode,
  mobileMode: state.mobileMode,
});

const mapDispatchToProps = dispatch => ({
  toggleNavBar: () => {
    dispatch(toggleNavBar());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
