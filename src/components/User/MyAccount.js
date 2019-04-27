import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MyAccountRentBox } from './MyAccountRentBox';

class MyAccount extends React.Component {

    renderRoomieDetail() {
        if(this.props.auth.user.roomie.name) {
            return(
                <div>
                    <p>
                        <b>Name: </b>{this.props.auth.user.roomie.name}
                    </p>
                    <p>
                        <b>Region: </b>{this.props.auth.user.roomie.region}
                    </p>
                    <p>
                        <b>Budget: </b>${this.props.auth.user.roomie.budget} per week
                    </p>
                    <p>
                        <b>Description: </b>{this.props.auth.user.roomie.description}
                    </p>
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

    renderRentBox() {
        if(this.props.auth.user.rent && this.props.auth.user.rent.length) {
            return (
                this.props.auth.user.rent.map(rent => {
                    return (
                        <MyAccountRentBox rent={rent} />
                    )
                })
            )
        } else {
            return (
                <p className="search-container__message">No result</p>
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

                <div className="home-list home-list--space-between">
                    <h3 className="home-list__title">My Rent Detail</h3>
                    <Link to="/rentregister" className="home-list__link">Add Rent</Link>
                </div>

                <div className="home-list">
                    {this.renderRentBox()}
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