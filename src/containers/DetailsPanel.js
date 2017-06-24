import { connect } from 'react-redux';
import DetailsPanel from '../components/DetailsPanel';


const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode
    };
};

export default connect(mapStateToProps)(DetailsPanel);