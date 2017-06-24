import { connect } from 'react-redux';
import NavBar from '../components/NavBar';


const mapStateToProps = state => {
    return {
        floating: state.mobileMode
    };
};

export default connect(mapStateToProps)(NavBar);