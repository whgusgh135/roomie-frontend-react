import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions/auth';
import { setError } from '../../redux/actions/error';

class NavbarLogin extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            password: "",
            passwordConfirm: "",
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
    
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="auth_form">
                    <label>ID: </label>
                    <input 
                        className="input--login"
                        type="text"
                        name="id"
                        value={id}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password: </label>
                    <input 
                        className="input--login"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                <button className="button button--login" type="submit">Login</button>
                <button className="button button--login" type="submit">
                    <Link to="/userregister">Register</Link>
                </button>
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

export default connect(mapStateToProps)(NavbarLogin);