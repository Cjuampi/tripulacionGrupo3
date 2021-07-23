import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="logo_container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="contact">
        <h4>Nuestra empresa</h4>
        <p>Quienes somos</p>
        <p>Anuncia tus eventos</p>
        <p>Servicios</p>
        <p><span>Contacto:</span>600 900 900</p>
        <p><span>Email:</span>name@dfun.com</p>
      </div>
      
     
    </footer>
  );
}

export default Footer;