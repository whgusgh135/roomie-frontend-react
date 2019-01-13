import React from 'react';

// replace this image with state
import profileImage from '../../styles/img/profile.jpg';

export const SidebarProfile = props => {
    // replace this value with state
    const userName = "Kevin Cho";

    return (
        <div>
            <p class="side-items side-items__profile-info">{userName}</p>
            <img src={profileImage} alt="profile" class="side-items side-items__profile-img" />
        </div>
    )
}