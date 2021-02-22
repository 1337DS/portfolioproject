import React, { Component } from 'react';
import data from '../../data';


function HomeScreen(props) {
    return <div>
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
}
export default HomeScreen;
