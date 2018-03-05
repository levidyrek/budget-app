import { connect } from 'react-redux';
import Budget from '../components/Budget'


const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode,
        navbarEnabled: state.navbarEnabled
    };
};

export default connect(mapStateToProps)(Budget);