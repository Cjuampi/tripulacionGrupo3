import React, { useContext } from 'react';
import Menu from '../Menu/Menu';
import './Header.css';
import logo from '../../assets/logo.png';
import { valuesContext } from '../../contexts/contextValue';
import utils from '../../utils/Utils'

const Header = () => {
    const {userNameDfun, setUserNameDfun} = useContext(valuesContext)

    return (
        <header>
            <div className="menu_header" >
                <div className="menu">
                    <Menu />
                </div>
                <div className="userNameHeader">
                  {userNameDfun?<p>{userNameDfun}</p>:<></>}
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}


export default Header;