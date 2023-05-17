import React from 'react';
import './App.scss';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
