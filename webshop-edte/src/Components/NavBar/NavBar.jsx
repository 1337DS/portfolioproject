import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                

                <nav id="menueliste">
        <ul>
          <li><a  href="index.html">Home</a></li>
          <li><a  href="Kontakt.html">Kontakt</a></li>
          <li><a  href="#">Anfahrt</a></li>
          <li><a  href="Restaurant.html">Restaurant</a></li>
          <li><a  href="Impressum.html">Impressum</a></li>
          <li><a  href="Datenschutzerklärung.html">Datenschutzerklärung</a></li>
        </ul>
      </nav>


                
            </div>
        );
    }
}

export default Navbar;