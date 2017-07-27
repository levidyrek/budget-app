import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './containers/NavBar';
import TopBar from './containers/TopBar';
import DetailsPanel from "./containers/DetailsPanel";
import { enableMobileMode } from './actions/responsive';
import { fetchBudgets, fetchSelectedBudget } from './actions/budgets';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import DialogController from './containers/DialogController';


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
                        {(!this.checkIfLoading()
                            && <DetailsPanel />)
                            || <ReactLoading type="bars" color="#444" />
                        }
                    </div>
                    <DialogController/>
                </div>
            </MuiThemeProvider>
        );
    }

    componentWillMount() {
        this.fetchDataIfNeeded()
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    componentDidUpdate() {
        this.fetchDataIfNeeded()
    }

    updateWindowDimensions = () => {
        this.props.dispatch(enableMobileMode(window.innerWidth < MOBILE_WIDTH_BREAKPOINT));
    };

    checkIfLoading() {
        const { budgets, selectedBudget } = this.props;

        return budgets.fetching || !budgets.items
            || selectedBudget.fetching || !selectedBudget.budget;
    }

    fetchDataIfNeeded() {
        const { budgets, selectedBudget, dispatch } = this.props;

        if (!budgets.fetching && !budgets.items) {
            dispatch(fetchBudgets());
        } else if ((!selectedBudget.fetching && selectedBudget.invalidated)
                && budgets.items) {
            let url = budgets.items[selectedBudget.month].url;
            dispatch(fetchSelectedBudget(selectedBudget.month, url));
        }
    }
}

const mapStateToProps = state => {
    return {
        mobileMode: state.mobileMode,
        navbarEnabled: state.navbarEnabled,
        budgets: state.budgets,
        selectedBudget: state.selectedBudget
    };
};

export default connect(mapStateToProps)(App);
