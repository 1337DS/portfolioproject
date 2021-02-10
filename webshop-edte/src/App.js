import logo from './logo.svg';
import './App.css';
import React, {Component } from 'react'
import WelcomePage from './Components/WelcomePage/WelcomePage';
import NavBar from './Components/NavBar/NavBar';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={WelcomePage}/>
          <Route exact path='/Home' component={WelcomePage}/>
        </Switch>
      
      </Router>

    </div>
  );
}

export default App;
