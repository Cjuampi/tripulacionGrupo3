/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { bubble as Menu } from "react-burger-menu";
import '../Menu/Menu.css';
import LogOut from "../Logout/Logout";

export default props => {
  return (
    // Pass on our props
    <div className="menu_burger">
    <Menu {...props}>
      <a className="menu-item" href="/"><p>Inicio</p></a>
      <a className="menu-item" href="/signup"><p>Registrarse</p></a>
      <a className="menu-item" href="/login"><p>Iniciar sesión</p></a>
      <a className="menu-item" href="/bookings"><p>Buscar en el Mapa</p></a>
      <LogOut />
      {/* <a className="menu-item" href="/logout">
        LogOut
      </a> */}
    </Menu>
    </div>
  );
};