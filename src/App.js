import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import NavDrawer from './components/NavDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TopBar/>
          <NavDrawer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
