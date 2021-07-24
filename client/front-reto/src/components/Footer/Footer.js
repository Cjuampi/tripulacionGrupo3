import React from "react";
import "./Footer.css";
import logo_grande from "../../assets/logo_grande.png";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="logo_container">
        <img className="logo-footer" src={logo_grande} alt="logo" />
      </div>
      <div className="contact">
        <h4>Nuestra empresa</h4>
        <div className="somos">
          <p>¿Quiénes somos?</p>
          <p>Anuncia tus eventos</p>
          <p>Servicios</p>
        </div>
        <div className="telephone">
          <p>
            <span className="bold">Contacto: </span>600 900 900
          </p>
          <p>
            <span className="bold">Email: </span>name@dfun.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
