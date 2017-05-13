import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Required for Material-UI
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
