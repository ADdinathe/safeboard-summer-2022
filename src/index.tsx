import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);

reportWebVitals();
