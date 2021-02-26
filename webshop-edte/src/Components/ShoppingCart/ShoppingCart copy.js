import React, { Component, setCount, count, useState } from 'react';
import data from '../../data';
import {Link} from 'react-router-dom';

function ShoppingCart(props) {
    const productId = props.match.params.id;
    const [count, setCount] = useState(0);
    
    React.useEffect(() => {
        const data = localStorage.getItem('Warenkorb');
        if (data) {
        setCount(JSON.parse(data));
        }
        }, [])
    
    return <div>
                Items in Shopping Cart:{count}

                
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