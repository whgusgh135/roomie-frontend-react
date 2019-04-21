import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MyAccount extends React.Component {

    renderRoomieDetail() {
        if(this.props.auth.user.roomie.name) {
            return(
                <div>
                    {this.props.auth.user.roomie.name}
                </div>
            )
        } else {
            return (
                <div>
                    You have not registered as a roomie yet.
                </div>
            )
        }
    }

    renderActionLink() {
        if(this.props.auth.user.roomie.name) {
            return(
                <Link to="/roomieedit" className="home-list__link">Edit</Link>
            )
        } else {
            return (
                <Link to="/roomieregister" className="home-list__link">Register</Link>
            )
        }
    }

    render() {
        return (
            <main className="home">
                <div className="home-list home-list--space-between">
                    <h3 className="home-list__title">My Roomie Detail</h3>
                    {this.renderActionLink()}
                </div>

                <div className="home-list">
                    <div className="account-box">
                        {this.renderRoomieDetail()}
                    </div>
                </div>


                <div className="home-list">
                    <Link to="/userchangepassword" className="button button--primary">Change Password</Link>
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(MyAccount);