import React from 'react';
import { NavLink , Link } from 'react-router-dom';
//Import logo
import Logo from '../../assets/logo.svg';


import './Navbar.css';

export default function NavBar() {
    return (

        <header>
            {/*Logo*/}
            <Link to={'/'}><img src={Logo} alt="" id='logo'/></Link>
            <ul id='link-box'>
                <li>
                    <NavLink exact to="/" activeClassName='linkActive' >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/favs" activeClassName='linkActive' >Favorites</NavLink>
                </li>
            </ul>
        </header>
    )
}