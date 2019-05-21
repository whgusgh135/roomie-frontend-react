import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MyAccountRentBox } from './MyAccountRentBox';
import { setPage } from '../../redux/actions/status';

class MyAccount extends React.Component {

    componentDidMount() {
        this.props.dispatch(setPage("my account"));
    }

    renderRoomieDetail() {
        if(this.props.auth.user.roomie.name) {
            return(
                <Link to="/roomieedit" className="account-box__img">
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
                </Link>
            )
        } else {
            return (
                <Link to="/roomieregister" className="account-box__img">
                    You have not registered yet.<br></br>
                    <br></br>
                    Register now to <br></br>
                    become a roomie!
                </Link>
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
    renderFigcaption() {
        if(this.props.auth.user.roomie.name) {
            return(
                <figcaption className="account-box__caption">
                    <p className="account-box__caption--edit">Click to Edit</p>
                </figcaption>
            )
        } else {
            return (
                <figcaption className="account-box__caption">
                    <p className="account-box__caption--edit">Register</p>
                </figcaption>
            )
        }
    }

    renderRentBox() {
        if(this.props.auth.user.rent && this.props.auth.user.rent.length) {
            return (
                this.props.auth.user.rent.map((rent, index) => {
                    return (
                        <MyAccountRentBox rent={rent} key={index}/>
                    )
                })
            )
        } else {
            return (
                <div className="account-box">
                    <div className="account-box__img">
                        No rent detail.<br></br>
                        <br></br>
                        Click here to <br></br>
                        list your property!
                    </div>
                </div>
            )
        }
    }

    render() {
        if(this.props.auth.isAuthenticated) {
            return (
                <main className="home">
                    <div className="home-list home-list--space-between">
                        <h3 className="home-list__title">My Roomie Detail</h3>
                        {this.renderActionLink()}
                    </div>
    
                    <div className="home-list">
                        <div className="account-box">
                            {this.renderRoomieDetail()}
                            {this.renderFigcaption()}
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
        } else {
            return(
                <div>hello</div>
            )
        }
        
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(MyAccount);