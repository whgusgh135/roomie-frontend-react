import React from 'react';
import { NavbarProfile } from './NavbarProfile';
import logo from '../../styles/img/logo-color.png';

export class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar">
                <img src={logo} alt="Roomie logo" class="nav-items__logo" />
                <form>
                    <input class="nav-items__search-bar" type="text" placeholder="Search" />
                </form>
                <NavbarProfile />
            </nav>
        )
    }
}