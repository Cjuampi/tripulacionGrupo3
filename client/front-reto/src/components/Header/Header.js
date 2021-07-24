import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';
import logo from '../../assets/logo.png';

const Header= () =>{
    
        return (
            <header>
                <div className="menu_header" >
                    <div className="menu">
                        <Menu/>
                        </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </header>
        )
    }


export default Header;