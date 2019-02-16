import React from 'react';
import * as actions from '../../redux/actions/auth';
import { connect } from 'react-redux';
import { setError } from '../../redux/actions/status';

class UserPasswordChange extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.auth.user.userId,
            password: "",
            newPassword: "",
            newPasswordConfirm: ""
        }
    }

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.state.newPassword === this.state.newPasswordConfirm){
            this.props.dispatch(actions.changePassword(this.state));
        } else {
            this.props.dispatch(setError("Password not same"));
        }
    }

    render() {
        const { password, newPassword, newPasswordConfirm } = this.state;

        return(
            <div className="register">
                <form onSubmit={this.handleSubmit} className="register-form">
                <h3 className="register-form__heading">User Registration</h3>
                    <label className="register-form__label">Current Password: </label>
                    <input className="register-form__input" 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">New Password: </label>
                    <input className="register-form__input" 
                        type="password"
                        name="newPassword"
                        value={newPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Password Confirmation: </label>
                    <input className="register-form__input" 
                        type="password"
                        name="newPasswordConfirm"
                        value={newPasswordConfirm}
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

export default connect(mapStateToProps)(UserPasswordChange);