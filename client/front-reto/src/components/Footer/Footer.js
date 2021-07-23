import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="main-footer">
      <h1 className="quotes">
        logo????
      </h1>
      <div className="container">
        <img alt="logo-instagram"
          className="icons"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
        />
        <img alt="logo-contact"
          className="icons"
          src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
        />
        <h2 className="nav_about">Ayuda</h2>
      </div>
    </footer>
  );
}

export default Footer;