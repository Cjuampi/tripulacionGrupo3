/* eslint-disable import/no-anonymous-default-export */
import React ,{ useContext } from "react";
import { bubble as Menu } from "react-burger-menu";
import '../Menu/Menu.css';
import LogOut from "../Logout/Logout";
import { valuesContext } from '../../contexts/contextValue';

export default props => {
  const {userNameDfun, setUserNameDfun} = useContext(valuesContext)
  return (
    // Pass on our props
    <div className="menu_burger">
    <Menu {...props}>
      <a className="menu-item" href="/"><p>Inicio</p></a>
      {userNameDfun?(
        <></>
      ):(
        <a className="menu-item" href="/signup"><p>Registrarse</p></a>
      )}
      {userNameDfun?(
        <></>
      ):(
        <a className="menu-item" href="/login"><p>Iniciar sesión</p></a>
      )}
      <a className="menu-item" href="/mapDetail"><p>Buscar en el Mapa</p></a>
      {userNameDfun?(
        <LogOut />
      ):(
        <></>
      )}
    </Menu>
    </div>
  );
};
