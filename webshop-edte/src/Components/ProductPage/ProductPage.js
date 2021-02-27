import React, { Component, useState, push} from 'react';
import data from '../../data';
import {Link, Route} from 'react-router-dom';

function ProductPage(props) {
    const product = data.products.find(x => x._id === props.match.params.id)
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);


    React.useEffect(() => {
                            const shoppingcart = localStorage.getItem('Warenkorb');
                            if (shoppingcart) {
                            setCart(JSON.parse(shoppingcart));
                            }
                            }, [])

    function SaveToCart(){
        let cartCopy = cart;

        let ID = product._id;

        const item = {'ID':product._id, 'qty':count};

        let existingItem = cartCopy.find(cartItem => cartItem.ID === ID);
       

        if (existingItem) {
            existingItem.qty += count}
            else{
                cartCopy.push(item)
            }


        setCart(cartCopy)
        
        localStorage.setItem("Warenkorb",JSON.stringify(cart))


        }


        
    

      return (
        <div>
                <div className="back-to-results">
                    <Link to="/">Zurück zur Produktseite</Link>
                </div>
                <div className="details"> 
                    
                    <div className="details-image">
                        <img src={product.image} alt="product"></img>

                    </div>

                    <div className="details-info">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                <h3>{product.description}</h3>
                            </li>
                            <li>
                                <h3>Preis: {product.price}</h3>
                            </li>
                        </ul>

                    </div>

                    <div className="details-action">
                        <ul>
                            <li>
                                Preis (in Euro): {product.europrice}
                            </li>
                            <li>
                                Status: {product.status}
                            </li>
                            <li>
                                Anzahl:<h3>{count}</h3>
                                <button className="button" onClick={() => setCount(count + 1)}>+</button>
                                <button className="button" onClick={() => setCount(count - 1)}>-</button>
                            </li>
                            <li>
                                <button className="button" onClick={SaveToCart}>Zum Warenkorb hinzufügen</button>

                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
      )
    }
export default ProductPage;
