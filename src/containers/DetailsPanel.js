import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DetailsPanel from '../components/DetailsPanel';


const mapStateToProps = state => ({
  mobileMode: state.mobileMode,
});

export default withRouter(connect(mapStateToProps)(DetailsPanel));
