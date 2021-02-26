import React, { Component } from 'react';

function CheckoutPage(props) {
    return <div>
                <form id="kontaktformular" action="https://www.edte-webshop.de/>mail.php" method="POST|GET">

                    <label>E-Mail Adresse</label>
                    <input type="text" id="vorname" name="formularansprechfeld" value= "" placeholder="Bitte Nachname eingeben"/>
                    <br/>
                    <label>Vorname</label>
                    <input type="text" id="vorname" name="formularansprechfeld" value= "" placeholder="Bitte Vornamen eingeben"/>
                    <label>Nachname</label>
                    <input type="text" id="vorname" name="formularansprechfeld" value= "" placeholder="Bitte Nachname eingeben"/>
                    <br/>
                    <label>Anrede</label>
                    <select id="anrede" name="anrede">
                    <option value="Herr">Herr</option>
                    <option value="Frau">Frau</option>
                    <option value="Firma">Firma</option>
                    </select>
                    <label>Straße und Hausnr.</label>
                    <input type="text" id="street" name="formularansprechfeld" value= "" placeholder="Bitte Straße und Hausnummer eingeben"/>
                    <br/>
                    <label>Postleitzahl</label>
                    <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte Postleitzahl eingeben"/>
                    <br/>

                    <label>Ort</label>
                    <input type="text" id="city" name="formularansprechfeld" value= "" placeholder="Bitte Ort eingeben"/>
                    <br/>

                    <label>Lieferhinweise</label>
                    <textarea id="lieferhinweise" name="lieferhinweise" placeholder="Lieferhinweis">
                    </textarea>

                    <br/>
                    <label>Kontoinhaber</label>
                    <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte Kontoinhaber angeben"/>
                    <br/>

                    <br/>
                    <label>IBAN</label>
                    <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte IBAN eingeben"/>
                    <br/>

                    <br/>
                    <label>IBAN</label>
                    <input type="text" id="zipcode" name="formularansprechfeld" value= "" placeholder="Bitte IBAN eingeben"/>
                    <br/>

                    <label>AGB gelesen und verstanden</label>
                    <input type="checkbox" id="AGB" name="AGB" value="AGB"/>
                    <br/> 

                                        
                    <button type="submit">
                        Kostenpflichtig bestellen
                    </button>

					</form>
            </div>
}
export default CheckoutPage;