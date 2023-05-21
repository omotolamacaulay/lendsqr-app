import React from 'react';
import './App.scss';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Home from './components/pages/Home';
import UserDetails from './components/users/UserDetails';
import Users from './components/users/Users';

function App() {
  return (
    <Router>
      <Fragment>
        <div className="">
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home><Users /></Home>} />
            <Route path='/users/:id' element={ <Home><UserDetails /></Home>} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
