import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
                <NavBar/>
                <div className="main-content">
                    <TopBar/>
                </div>
            </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
