import React from 'react';
import './App.scss';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/pages/Home';
import UserDetail from './components/users/UserDetail';
import Users from './components/users/Users';

function App() {
  return (
    <Router>
      <Fragment>
        <div className="">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home><Users /></Home>} />
            <Route path='/users/123' element={ <Home><UserDetail /></Home>} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
