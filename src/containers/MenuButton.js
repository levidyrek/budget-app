import { connect } from 'react-redux';
import MenuButton from '../components/MenuButton';
import { toggleNavBar } from '../actions/responsive';


const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        clickHandler: () => {
            dispatch(toggleNavBar());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);