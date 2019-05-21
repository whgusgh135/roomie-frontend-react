import React from 'react';
import { Link } from 'react-router-dom';

export class NavbarProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: "/api/image/" + this.props.auth.user.roomie.profileImage
        }
    }

    
    
    render() {
        return (
            <div>
                {(this.props.auth.user.roomie.name) ? (
                    <Link to="/my account" className="nav-items__profile">
                        <img src={this.state.profileImage} alt="profile" className="nav-items__profile--img" />
                        <p className="nav-items__profile--name">{this.props.auth.user.firstName} {this.props.auth.user.lastName}</p>
                    </Link>
                ) : (
                    <Link to="/roomieregister" className="nav-items__roomieRegister">Become a Roomie</Link>
                )}  
            </div>
           
        )
    }
}