import React, { Component } from 'react';
import './App.css';
import NavDrawer from './components/NavDrawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavDrawer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
