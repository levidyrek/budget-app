import React, {Component} from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Budget from './containers/Budget'
import LoginPage from './containers/LoginPage'
import PrivateRoute from './containers/PrivateRoute'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute path="/budget" component={Budget} />
                    </Switch>
                </Router>
            </MuiThemeProvider>
        )
    }
}
