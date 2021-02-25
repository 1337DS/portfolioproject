import React, { Component } from 'react';
import data from '../../data';
import {Link} from 'react-router-dom';


function HomeScreen(props) {
    return <div>
                <ul className="products">
                    {
                    data.products.map(product =>             
                    <li>
                        <div className="product">
                        <Link to={'/products/'+ product._id}>
                        <img className="product-image" src={product.image} alt="product"></img>
                        </Link>
                        <div className="product-name">
                            <Link to={'/products/'+ product._id}>{product.name}</Link>
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
