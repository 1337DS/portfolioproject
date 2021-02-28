import React, { Component, setCount, count, useState } from 'react';
import data from '../../data';
import {Link} from 'react-router-dom';

function ShoppingCart(props) {
    
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    let cartNotZero= [];
    let cartTotal=0;

    
    
    React.useEffect(() => {
        const shoppingcart = localStorage.getItem('Warenkorb');
        if (shoppingcart) {
        setCart(JSON.parse(shoppingcart));
        }
        },[])
    
    

    function CartItemsNotZero(){
        
        cart.forEach(item => {if (item.qty > 0){cartNotZero.push(item)}} );
    }
  

    function CalculateTotal(){
        cartNotZero.forEach(item => cartTotal += (item.saleprice*item.qty));
    }
    function buttonplus(){
    CartItemsNotZero(); }
    function buttonminus(){

    }
    return <div>
            <div className="back-to-results">
                    <Link to="/ShoppingCart">Zurück zur Produktseite</Link>
                </div>
                          

                
                <ul className="products-cart">
                    <h1>Artikel im Einkaufswagen:</h1>  
                    {CartItemsNotZero()}
                    {
                    
                    cartNotZero.map(cartproduct =>   
                    
                    
                        
                    <li>
                        <div className="product">
                        <Link to={'/products/'+ cartproduct.ID}>
                        <img className="product-image-cart" src={data.products.find(x => x._id === cartproduct.ID).image} alt="product"></img>
                        </Link>
                        <div className="product-name-cart">
                            <Link to={'/products/'+ cartproduct.ID}>{data.products.find(x => x._id === cartproduct.ID).name}</Link>
                        </div>
                        {/* <div className="product-description">{product.description}</div> */}
                        <div className="product-price-cart"><div>Einzelpreis: € {data.products.find(x => x._id === cartproduct.ID).europrice}</div> {cartproduct.qty} Stück
                        <Link>
                        <button className="button-cart" onClick={() => cartproduct.qty +=1}>+</button>
                        </Link>
                        <Link>
                        <button className="button-cart" onClick={() => cartproduct.qty -=1}>-</button> 
                        </Link>
                        </div>
                        </div>
                    </li>)
                    }
                    <li>
                        <div className="cartsum"><h2>Summe:</h2>{CalculateTotal()}{cartTotal}  €</div>
                    </li>
                    <li>
                        <Link to={'/checkout'}>
                            <button>Weiter zum Checkout</button>
                        </Link>
                    </li>
                </ul>

                
         
            </div>
            
}
export default ShoppingCart;