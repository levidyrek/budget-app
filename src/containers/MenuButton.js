import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MenuButton from '../components/MenuButton';
import { toggleNavBar } from '../actions/responsive';


const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  clickHandler: () => {
    dispatch(toggleNavBar());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuButton));
