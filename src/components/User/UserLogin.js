import React from 'react';
import * as actions from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setError } from '../../redux/actions/status';
import { Link } from 'react-router-dom';

class UserLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            password: ""
        }
    }

    loginUser = userData => {
        this.props.dispatch(actions.authUser(userData));
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.loginUser(this.state);    
    }

    render() {
        const { id, password } = this.state;

        if(this.props.auth.isAuthenticated) {
            return <Redirect to="/" />
        }

        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="register-form">
                <h3 className="register-form__heading">User Login</h3>
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
                <button class="button button--primary" type="submit">Login</button>

                <Link to="userregister" class="button button--primary">Register</Link>

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

export default connect(mapStateToProps)(UserLogin);