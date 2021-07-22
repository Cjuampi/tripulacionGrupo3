import React from "react";
import { Link } from 'react-router-dom';
import "./Nav.scss";

function Nav() {
  return (
<nav className="Nav">
        <ul className="Nav__list">
          <li className="Nav__listItem">
            <Link className="Nav__link" to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/staff"> Quienes somos</Link>
          </li>
          <li>
            <Link to="/location"> Dónde Estamos</Link>
          </li>
          <li>
            <Link to="/contact"> Conócenos</Link>
          </li>
          
        </ul>
      </nav>
  )
}

export default Nav