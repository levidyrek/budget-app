/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import 'es6-promise/auto';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore';

import App from './App';
import './index.css';

const store = configureStore();

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
