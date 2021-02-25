import React, { Component } from 'react';
import data from '../../data';


function ProductPage(props) {
    console.log(props.match.params.id)
        const product = data.products.find(x => x._id === props.match.params.id)
    return <div>
                <div>
                    <Link to="/">Zurück zur Produktseite</Link>
                </div>
                <div className="details"> </div>
                    
                    <div className="details-image">
                        <img src={product.image} alt="product"></img>

                    </div>

                    <div className="details-info">
                        <ul>
                            <li>
                                <h3>{product.name}</h3>
                            </li>
                            <li>
                                <h3>{product.description}</h3>
                            </li>
                            <li>
                                <h3>{product.price}</h3>
                            </li>
                        </ul>

                    </div>
                
                
                <h1> {product.name}</h1> 
                        Heres product page
            </div>
}
export default ProductPage; 

