import React from 'react';
import { connect } from 'react-redux';
import { NavbarProfile } from './NavbarProfile';
import NavbarLogin from './NavbarLogin';
import logo from '../../styles/img/logo-color.png';

class Navbar extends React.Component {

    render() {
        return(
            <nav class="navbar">  
                <img src={logo} alt="Roomie logo" class="nav-items__logo" />
                <form>
                    <input class="nav-items__search-bar" type="text" placeholder="Search" />
                </form>
                
                {this.props.auth.isAuthenticated ? (
                    <NavbarProfile auth={this.props.auth} />
                ) : (
                    <NavbarLogin />
                )}
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Navbar);