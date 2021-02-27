import React, { Component, setCount, count, useState } from 'react';
import data from '../../data';
import {Link} from 'react-router-dom';

function ShoppingCart(props) {
    
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    
    React.useEffect(() => {
        const data = localStorage.getItem('Warenkorb');
        if (data) {
        setCart(JSON.parse(data));
        }
        }, [])
    let hoverboards = cart.find(cartItem => cartItem.ID === "123");
    return <div>
               <h1>Items in Shopping Cart:</h1> 
               <h1>hoverboard {hoverboards}</h1>

                
                <ul className="products-cart">
                    {
                    data.products.map(product =>             
                    <li>
                        <div className="product">
                        <Link to={'/products/'+ product._id}>
                        <img className="product-image-cart" src={product.image} alt="product"></img>
                        </Link>
                        <div className="product-name-cart">
                            <Link to={'/products/'+ product._id}>{product.name}</Link>
                        </div>
                        {/* <div className="product-description">{product.description}</div> */}
                        <div className="product-price-cart"><div>€ {product.europrice}</div>* X Stck
                        
                        <button className="button-cart" onClick={() => setCount(count + 1)}>+</button>
                        <button className="button-cart" onClick={() => setCount(count - 1)}>-</button> 
                        </div>
                        </div>
                    </li>)
                    }
                </ul>
         
            </div>
            
}
export default ShoppingCart;