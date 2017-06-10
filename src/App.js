import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import DetailsPanel from "./components/DetailsPanel";


const MOBILE_WIDTH_BREAKPOINT = 800;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileMode: window.innerWidth < MOBILE_WIDTH_BREAKPOINT,
            navbarEnabled: false
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    {(!this.state.mobileMode || this.state.navbarEnabled) &&
                        <NavBar floating={this.state.mobileMode} />
                    }
                    <div className="main-content">
                        <TopBar mobileMode={this.state.mobileMode}
                                menuButtonClickHandler={this.handleMenuButtonClick} />
                        <DetailsPanel mobileMode={this.state.mobileMode} />
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
        this.setState({
            mobileMode: window.innerWidth < MOBILE_WIDTH_BREAKPOINT
        });
    };

    handleMenuButtonClick = () => {
        this.setState((prevState, props) => {
            return {
                navbarEnabled: !prevState.navbarEnabled
            };
        });
    };
}

export default App;
