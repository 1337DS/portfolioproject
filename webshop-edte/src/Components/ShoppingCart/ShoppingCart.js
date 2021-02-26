import React, { Component, setCount, count } from 'react';


class ShoppingCart extends React.Component {

    render() {
          

      return <h1>Items in Shopping Cart: {this.count}</h1>;
      
      
    }
  }


  export default  ShoppingCart;
