import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './tutorial-6/App';

import './tutorial-6/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
