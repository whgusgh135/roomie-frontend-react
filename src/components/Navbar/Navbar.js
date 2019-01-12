import React from 'react';

export class Navbar extends React.Component {
    render() {
        return(
            <nav class="navbar">
                <img src="img/logo-color.png" alt="Roomie logo" class="nav-items__logo" />
                <form>
                    <input class="nav-items__search-bar" type="text" placeholder="Search" />
                </form>
                <a href="#" class="nav-items__profile">
                    <img src="img/profile.jpg" alt="profile" class="nav-items__profile--img" />
                    <p class="nav-items__profile--name">Kevin Cho</p>
                </a>
            </nav>
        )
    }
}