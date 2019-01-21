import React from 'react';

// replace this image with state
import profileImage from '../../styles/img/profile.jpg';

export class SidebarProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: "/api/profileimage/" + this.props.auth.user.roomie.profileImage
        }
    }
    // replace this value with state

    render() {
        return (
            <div>
                <p className="side-items side-items__profile-info">{this.props.auth.user.firstName} {this.props.auth.user.lastName}</p>
                <img src={this.state.profileImage} alt="profile" className="side-items side-items__profile-img" />
            </div>
        )
    }
}
   