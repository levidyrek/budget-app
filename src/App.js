import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import BudgetDetailsPanel from "./components/BudgetDetailsPanel";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <NavBar/>
                <div className="main-content">
                    <TopBar/>
                    <BudgetDetailsPanel/>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
