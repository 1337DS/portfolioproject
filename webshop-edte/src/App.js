import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react'
import WelcomePage from './Components/WelcomePage/WelcomePage';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart copy';
import ProductPage from './Components/ProductPage/ProductPage';
import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import data from './data';
import { Route, Switch, BrowserRouter as Router, BrowserRouter, Link } from 'react-router-dom';


function App() {
  const sortiment = [123,124,125,126,127,128,129,130,131,132,133,134];
  
  return (

    <Router>

    <div className="grid-container">

      <div className="header">
        <img className="brand-image" src='images/rares.jpg'></img>
        <div className="brand">
          
          <Link to="/">Rares für Bares</Link>
        </div>

        <div className="header-link">
          <Link to="/cart">Einkaufswagen  <FontAwesomeIcon icon={faShoppingCart} /></Link>
        </div>

      </div>

      <main className="main">
        <div className="content">
          <Route path="/" exact={true} component={WelcomePage}/>
          <Route path="/products/:id" component={ProductPage}/>
          <Route path="/cart" component={ShoppingCart}/>
          <Route path="/checkout" component={CheckoutPage}/>
        
          


        </div>
      </main>

      <footer className="footer">All rights reserved &#169; 2021</footer>
    </div>

    </Router>
  );
}

export default App;
