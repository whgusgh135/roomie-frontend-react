import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class NavbarMessage extends React.Component {

    renderNotice = () => {
        if(this.props.message.messages.length > 0) {  
            return (
                <div className="nav-items__message--unread">{this.props.message.messages.length}</div>
            )
        }
    }

    render() {
        if(this.props.auth.isAuthenticated) {
            if(this.props.auth.user.roomie.name) {
                return (
                    <Link to="/messages" className="nav-items__message" message={this.props.message}>message {this.renderNotice()}</Link>
                )
            }
            return (
                <div></div>
            )
        } else {
            return (
                <div></div>
            )
        }        
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        message: state.messageReducer
    }
}

export default connect(mapStateToProps)(NavbarMessage);