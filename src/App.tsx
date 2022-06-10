import * as React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

import Main from './pages/Main';
import Onboarding from './pages/Onboadring';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="main">About</Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        {/* Define all the routes */}
        <Routes>
          <Route path="/" element={<Onboarding />}></Route>
          <Route path="main" element={<Main />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
