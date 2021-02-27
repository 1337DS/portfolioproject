import React, { Component, setCount, count, useState } from 'react';
import data from '../../data';
import {Link} from 'react-router-dom';

function ShoppingCart(props) {
    
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    
    React.useEffect(() => {
        const shoppingcart = localStorage.getItem('Warenkorb');
        if (shoppingcart) {
        setCart(JSON.parse(shoppingcart));
        }
        },[])
      

    return <div>
                          

                
                <ul className="products-cart">
                    <h1>Artikel im Einkaufswagen:</h1>   
                    {
                    
                    cart.map(cartproduct =>   
                        
                    <li>
                        <div className="product">
                        <Link to={'/products/'+ cartproduct.ID}>
                        <img className="product-image-cart" src={data.products.find(x => x._id === cartproduct.ID).image} alt="product"></img>
                        </Link>
                        <div className="product-name-cart">
                            <Link to={'/products/'+ cartproduct._id}>{data.products.find(x => x._id === cartproduct.ID).name}</Link>
                        </div>
                        {/* <div className="product-description">{product.description}</div> */}
                        <div className="product-price-cart"><div>€ {data.products.find(x => x._id === cartproduct.ID).europrice}</div>* {cartproduct.qty} Stck
                        
                        <button className="button-cart" onClick={() => (cartproduct.qty + 1)}>+</button>
                        <button className="button-cart" onClick={() => setCount(count - 1)}>-</button> 
                        </div>
                        </div>
                    </li>)
                    }
                    <li>
                        <Link to={'/checkout'}>
                            <button>Weiter zum Checkout</button>
                        </Link>
                    </li>
                </ul>

                
         
            </div>
            
}
export default ShoppingCart;