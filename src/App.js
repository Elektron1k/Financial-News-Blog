import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Articles from './pages/Articles';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="main-container">
          <nav className="navbar-header">
            <Link className="navbar-text" to="/articles">
              SHARETRADE.<span>COM</span>
            </Link>
          </nav>
          <Routes>
            <Route path="/articles" element={<Articles />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
