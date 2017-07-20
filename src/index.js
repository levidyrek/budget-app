import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';

// Required for Material-UI
injectTapEventPlugin();

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
