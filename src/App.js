import React, {Component} from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Budget from './containers/Budget'
import LoginPage from './containers/LoginPage'
import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Route } from 'react-router-dom'


export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <Route path="/login" component={LoginPage} />
                        <PrivateRoute path="/budget" component={Budget} />
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}
