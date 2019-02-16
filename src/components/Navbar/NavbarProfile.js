import React from 'react';
import axios from 'axios';

// replace this image with state
import profileImage from '../../styles/img/profile.jpg';

export class NavbarProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: "/api/image/" + this.props.auth.user.roomie.profileImage
        }
    }

    
    
    render() {
        return (
            <a href="#" className="nav-items__profile">
                <img src={this.state.profileImage} alt="profile" className="nav-items__profile--img" />
                <p className="nav-items__profile--name">{this.props.auth.user.firstName} {this.props.auth.user.lastName}</p>
            </a>
        )
    }
}