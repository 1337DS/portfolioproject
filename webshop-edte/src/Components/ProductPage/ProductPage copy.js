import React, { Component, useState } from 'react';
import data from '../../data';
import {Link} from 'react-router-dom';
function ProductPage(props) {
    const product = data.products.find(x => x._id === props.match.params.id)
    const [count, setCount] = useState(0);
return <div>
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
                        <button className="button" onClick={() => setCount(count - 1)}>Zum Warenkorb hinzufügen</button>

                    </li>
                </ul>
            </div>
        </div>
        
    </div>
}
export default ProductPage; 

