import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import { HashRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

// Const root = ReactDOM.createRoot(
//   Document.getElementById('root') as HTMLElement
// );

// Root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);

reportWebVitals();
