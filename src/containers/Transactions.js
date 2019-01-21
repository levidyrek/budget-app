import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Transactions from '../components/Transactions';


export default withRouter(connect()(Transactions));
