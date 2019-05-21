import React from 'react';
import * as actions from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setError } from '../../redux/actions/status';

class UserRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            password: "",
            passwordConfirm: "",
            firstName: "",
            lastName: ""
        }
    }

    registerUser(userData) {
        this.props.dispatch(actions.registerUser(userData));
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.password === this.state.passwordConfirm){
            this.registerUser(this.state);
        } else {
            this.props.dispatch(setError({"message":"Password not same."}));
        }
    }

    render() {
        const { id, password, passwordConfirm, firstName, lastName } = this.state;

        if(this.props.auth.isAuthenticated) {
            return <Redirect to="/" />
        }

        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="register-form">
                <h3 className="register-form__heading">User Registration</h3>
                    <label className="register-form__label">ID: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="id"
                        value={id}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Password: </label>
                    <input className="register-form__input" 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Password Confirmation: </label>
                    <input className="register-form__input" 
                        type="password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">First Name: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Last Name: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                        required
                    />
                <button class="button button--primary" type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(UserRegister);