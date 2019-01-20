import React from 'react';
import axios from 'axios';

// replace this image with state
import profileImage from '../../styles/img/profile.jpg';

export class NavbarProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: "/api/profileimage/" + this.props.auth.user.roomie.profileImage
        }
    }

    
    
    render() {
        return (
            <a href="#" class="nav-items__profile">
                <img src={this.state.profileImage} alt="profile" class="nav-items__profile--img" />
                <p class="nav-items__profile--name">{this.props.auth.user.firstName} {this.props.auth.user.lastName}</p>
            </a>
        )
    }
}