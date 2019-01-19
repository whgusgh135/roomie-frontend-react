import React from 'react';
import * as actions from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { setError } from '../../redux/actions/error';

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            password: "",
            passwordConfirm: "",
        }
    }

    loginUser(userData) {
        this.props.dispatch(actions.authUser(userData));
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.password === this.state.passwordConfirm){
            this.loginUser(this.state);
        } else {
            this.props.dispatch(setError("Password not same"));
        }
        
    }

    render() {
        const { id, password, passwordConfirm } = this.state;

        return (
            <div class="auth">
                <form onSubmit={this.handleSubmit} class="auth_form">
                    <label>ID: </label>
                    <input 
                        type="text"
                        name="id"
                        value={id}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password: </label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password Confirmation: </label>
                    <input 
                        type="password"
                        name="passwordConfirm"
                        value={passwordConfirm}
                        onChange={this.handleChange}
                        required
                    />
                <button class="button--primary" type="submit">Submit</button>

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

export default connect(mapStateToProps)(Auth);