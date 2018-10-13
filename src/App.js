import React, {Component} from 'react'
import './App.css'
import Budget from './containers/Budget'
import LoginPage from './containers/LoginPage'
import PrivateRoute from './containers/PrivateRoute'
import ErrorDialog from './containers/ErrorDialog'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute path="/budget" component={Budget} />
                        <Redirect to="/budget" />
                    </Switch>
                    <ErrorDialog />
                </div>
            </Router>
        )
    }
}
