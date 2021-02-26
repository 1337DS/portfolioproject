import React, { Component } from 'react';
import data from '../../data';
import {Link} from 'react-router-dom';


function ProductPage(props) {
    console.log(props.match.params.id)
        const product = data.products.find(x => x._id === props.match.params.id)
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
                                Preis (in Euro): {product.price}
                            </li>
                            <li>
                                Status: {product.status}
                            </li>
                            <li>
                                Anzahl:<select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </li>
                            <li>
                                <button className="button">Zum Warenkorb hinzufügen</button>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
}
export default ProductPage; 

