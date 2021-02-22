import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import WelcomePage from './Components/WelcomePage/WelcomePage';
import NavBar from './Components/NavBar/NavBar';
import data from './data'
import { Route, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

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
          <Rou
          <Route path="/" exact={true} component={HomeScreen}/>
          <ul className="products">
            {
              data.products.map(product =>             
              <li>
                <div className="product">
                  <img className="product-image" src={product.image} alt="product"></img>
                  <div className="product-name">
                    <a href="Jetpack.html">{product.name}</a>
                  </div>
                  <div className="product-description">{product.description}</div>
                  <div className="product-price">{product.price}</div>
                </div>
              </li>)
            }
          </ul>


        </div>
      </main>

      <footer className="footer">All rights reserved &#169; 2021</footer>
    </div>

    </BrowserRouter>
  );
}

export default App;
