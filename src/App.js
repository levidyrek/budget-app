import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './containers/NavBar';
import TopBar from './containers/TopBar';
import DetailsPanel from "./containers/DetailsPanel";
import { enableMobileMode } from './actions/responsive';
import { connect } from 'react-redux';


const MOBILE_WIDTH_BREAKPOINT = 800;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbarEnabled: false
        };

        this.updateWindowDimensions()
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    {(!this.props.mobileMode || this.props.navbarEnabled) &&
                        <NavBar />
                    }
                    <div className="main-content">
                        <TopBar />
                        <DetailsPanel />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.props.dispatch(enableMobileMode(window.innerWidth < MOBILE_WIDTH_BREAKPOINT));
    };
}

const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode,
        navbarEnabled: state.navbarEnabled
    };
};

export default connect(mapStateToProps)(App);
