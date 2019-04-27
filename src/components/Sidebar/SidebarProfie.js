import React from 'react';
import { Link } from 'react-router-dom';

export class SidebarProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: "/api/image/" + this.props.auth.user.roomie.profileImage
        }
    }
    // replace this value with state

    render() {
        return (
            <div>
                {(this.props.auth.user.roomie.name) ? (
                    <Link to="/My account">
                        <p className="side-items side-items__profile-info">{this.props.auth.user.firstName} {this.props.auth.user.lastName}</p>
                        <img src={this.state.profileImage} alt="profile" className="side-items side-items__profile-img" />
                    </Link>
                ) : (
                    <Link to="/roomieregister">
                        <p className="side-items side-items__profile-info">Become a Roomie!</p>
                        <img src={this.state.profileImage} alt="profile" className="side-items side-items__profile-img" />
                    </Link>
                )}
            </div>
        )
    }
}
   