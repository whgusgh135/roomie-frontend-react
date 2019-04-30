import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';
import { SidebarItem } from './SidebarItem';
import { SidebarProfile } from './SidebarProfie';
import { Link } from 'react-router-dom';
import defaultProfile from '../../styles/img/avatar-default.png'

class Sidebar extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    renderSidebarItems() {
        let sidebarItem = ["home", "roomie", "rent"];
        if(this.props.auth.isAuthenticated) {
            sidebarItem.unshift("my account");
        } 
        return (
            sidebarItem.map(item => {
                return (
                    <SidebarItem item = {item} status={this.props.status}/>
                )
            })
        )
    }

    renderSidebarProfile() {
        if(this.props.auth.isAuthenticated) {
            return <SidebarProfile auth={this.props.auth} />
        } else {
            return (
                <Link to="/userlogin">
                    <p className="side-items side-items__profile-info">Login or Register</p>
                    <img src={defaultProfile} alt="profile" className="side-items side-items__profile-img" />
                </Link>
            )
        }
    }

    renderLogout() {
        if(this.props.auth.isAuthenticated) {
            return (
                <ul className="side-items">
                    <Link to="/" className="side-items__item" onClick={this.logout}>
                        <div className="side-items__link">
                            Logout
                        </div>
                    </Link>
                </ul>
            )
        }
    }

    logout() {
        this.props.dispatch(actions.logout());
    }

    render() {
        return (
            <nav className="sidebar">
                {this.renderSidebarProfile()}
                <ul className="side-items">
                    {this.renderSidebarItems()}
                </ul>
                {this.renderLogout()}
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        status: state.statusReducer
    }
}

export default connect(mapStateToProps)(Sidebar);