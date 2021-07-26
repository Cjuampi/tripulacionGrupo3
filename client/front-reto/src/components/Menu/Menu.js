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
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/login">
        Login
      </a>

      <a className="menu-item" href="/signup">
        Mis favoritos
      </a>

      <a className="menu-item" href="/bookings">
        Mis reservas
      </a>
      <LogOut/>
      {/* <a className="menu-item" href="/logout">
        LogOut
      </a> */}
    </Menu>
    </div>
  );
};