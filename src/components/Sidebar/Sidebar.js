import React from 'react';

export class Sidebar extends React.Component {
    render() {
        return (
            <nav class="sidebar">
                <p class="side-items side-items__profile-info">Kevin Cho</p>
                <img src="img/profile.jpg" alt="profile" class="side-items side-items__profile-img" />
                <ul class="side-items">
                    <li class="side-items__item">
                        <a href="#" class="side-items__link">My Account</a>
                    </li>
                    <li class="side-items__item">
                        <a href="#" class="side-items__link">Home</a>
                    </li>
                    <li class="side-items__item">
                        <a href="#" class="side-items__link">Roomie</a>
                    </li>
                    <li class="side-items__item">
                        <a href="#" class="side-items__link">Flat</a>
                    </li>
                </ul>
            </nav>
        )
    }
}