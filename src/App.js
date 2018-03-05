import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Budget from "./containers/Budget";
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default class App extends Component {

    render() {
        return (
            <Router>
                <MuiThemeProvider>
                    <Route path="/budget" component={Budget} />
                </MuiThemeProvider>
            </Router>
        );
    }
}
