import { connect } from 'react-redux';
import TopBar from '../components/TopBar';


const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode
    };
};

export default connect(mapStateToProps)(TopBar);