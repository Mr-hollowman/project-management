import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/create'>
              <Create />
            </Route> 
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/project:id'>
              <Project />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}