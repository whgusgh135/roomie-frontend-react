import React from 'react';
import * as actions from '../../redux/actions/auth';

export class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: "",
            password: ""
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
        this.loginUser(this.state);
    }

    render() {
        const { id, password } = this.state;

        return (
            <div class="auth">
                <form onSubmit={this.handleSubmit}>
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
                <button class="button--primary" type="submit">Submit</button>

                </form>
            </div>
        )
    }
}