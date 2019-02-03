import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';
import { SidebarItem } from './SidebarItem';
import { SidebarProfile } from './SidebarProfie';

class Sidebar extends React.Component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    renderSidebarItems() {
        let sidebarItem = ["Home", "Roomie", "Flat"];
        if(this.props.auth.isAuthenticated) {
            sidebarItem.unshift("My account");
        } 
        return (
            sidebarItem.map(item => {
                return (
                    <SidebarItem item = {item}/>
                )
            })
        )
    }

    renderSidebarProfile() {
        if(this.props.auth.isAuthenticated) {
            return <SidebarProfile auth={this.props.auth} />
        }
    }

    renderLogout() {
        if(this.props.auth.isAuthenticated) {
            return (
                <ul className="side-items">
                    <li className="side-items__item">
                        <div className="side-items__link" onClick={this.logout}>
                            Logout
                        </div>
                    </li>
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
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Sidebar);