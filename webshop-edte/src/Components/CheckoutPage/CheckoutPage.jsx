import React, { Component, useState, setState, count, sortiment } from 'react';
import ProductPage from '../ProductPage/ProductPage copy';

function CheckoutPage(props) {
    
    return <div className='checkout'>
                <h1>Einkauf Abschließen</h1>
                <h1>{sortiment}</h1>
                <form className="kontaktformular" action="https://www.edte-webshop.de/>mail.php" method="POST|GET">
                        <li><label>E-Mail Adresse</label>
                        <input type="text" id="vorname" name="formularansprechfeld" value= "" placeholder="Bitte Nachname eingeben"/>
                        <br/></li>

                        <li><label>Vorname</label>
                        <input type="text" id="vorname" name="formularansprechfeld" value= "" placeholder="Bitte Vornamen eingeben"/>
                        </li>

                        <li><label>Nachname</label>
                        <input type="text" id="vorname" name="formularansprechfeld" value= "" placeholder="Bitte Nachname eingeben"/>
                        <br/></li>

                        <li> <label>Anrede</label>
                        <select id="anrede" name="anrede">
                        <option value="Herr">Herr</option>
                        <option value="Frau">Frau</option>
                        <option value="Firma">Firma</option>
                        </select></li>

                        <li><label>Straße und Hausnr.</label>
                        <input type="text" id="street" name="formularansprechfeld" value= "" placeholder="Bitte Straße und Hausnummer eingeben"/>
                        <br/></li>

                        <li><label>Postleitzahl</label>
                        <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte Postleitzahl eingeben"/>
                        <br/></li>

                        <li><label>Ort</label>
                        <input type="text" id="city" name="formularansprechfeld" value= "" placeholder="Bitte Ort eingeben"/>
                        <br/></li>

                        <li><label>Lieferhinweise</label>
                        <textarea id="lieferhinweise" name="lieferhinweise" placeholder="Lieferhinweis">
                        </textarea></li>

                        <li><br/>
                        <label>Kontoinhaber</label>
                        <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte Kontoinhaber angeben"/>
                        <br/></li>

                        <li><br/>
                        <label>IBAN</label>
                        <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte IBAN eingeben"/>
                        <br/></li>

                        <li><br/>
                        <label>IBAN</label>
                        <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte IBAN eingeben"/>
                        <br/></li>


                        <li> <label>AGB gelesen und verstanden</label>
                        <input type="checkbox" id="AGB" name="AGB" value="AGB"/>
                        <br/> 

                        </li>
                        <li> <button type="submit">
                        Kostenpflichtig bestellen
                        </button>
                                
                        </li>
                        
                        
					</form>
            </div>
}
export default CheckoutPage;