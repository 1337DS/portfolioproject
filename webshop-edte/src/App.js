import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import WelcomePage from './Components/WelcomePage/WelcomePage';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import ProductPage from './Components/ProductPage/ProductPage';
import data from './data';
import { Route, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <Router>

    <div className="grid-container">

      <div className="header">

        <div className="brand">
          Rares für Bares
          </div>

        <div className="header-link">
          <a href="cart.html">Shopping Cart</a>
        </div>

      </div>

      <main className="main">
        <div className="content">
          <Route path="/" exact={true} component={WelcomePage}/>
          <Route path="/products/:id" component={ProductPage}/>
          <Route path="/checkout" component={ShoppingCart}/>
        
          


        </div>
      </main>

      <footer className="footer">All rights reserved &#169; 2021</footer>
    </div>

    </Router>
  );
}

export default App;
