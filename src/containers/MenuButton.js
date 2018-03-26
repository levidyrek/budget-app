import { connect } from 'react-redux'
import MenuButton from '../components/MenuButton'
import { toggleNavBar } from '../actions/responsive'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickHandler: () => {
            dispatch(toggleNavBar())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuButton))