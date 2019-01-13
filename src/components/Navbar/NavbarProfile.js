import React from 'react';

// replace this image with state
import profileImage from '../../styles/img/profile.jpg';

export const NavbarProfile = props => {
    // replace this value with state
    const userName = "Kevin Cho";

    return (
        <a href="#" class="nav-items__profile">
            <img src={profileImage} alt="profile" class="nav-items__profile--img" />
            <p class="nav-items__profile--name">{userName}</p>
        </a>
    )
}