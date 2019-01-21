import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Expenses from '../components/Expenses';


export default withRouter(connect()(Expenses));
