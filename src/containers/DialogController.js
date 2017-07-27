import { connect } from 'react-redux';
import DialogController from '../components/DialogController';

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    };
};

export default connect(mapStateToProps)(DialogController);