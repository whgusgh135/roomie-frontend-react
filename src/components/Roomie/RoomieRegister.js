import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/roomie';
import FormData from 'form-data';
import { Redirect } from 'react-router-dom';

class RoomieRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            phoneNumber: "",
            region: "",
            budget: "50",
            profileImage: null
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        let formData = new FormData();
        if(this.state.profileImage) {
            formData.append('profileImage', this.state.profileImage, this.state.profileImage.name);
        }
        formData.append('phoneNumber', this.state.phoneNumber);
        formData.append('region', this.state.region);
        formData.append('budget', this.state.budget);

        this.props.dispatch(actions.createRoomie(formData));
    }

    setFile = event => {
        this.setState({profileImage: event.target.files[0]});
    }

    render() {
        const { phoneNumber, region, budget } = this.state;

        if(this.props.status.redirect == "home") {
           return <Redirect to="/home" />
        }
        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <h3 className="register-form__heading">Roomie Registration</h3>
                    <label className="register-form__label">Phone Number: </label>
                    <input className="register-form__input"
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Region: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="region"
                        value={region}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Budget: </label>
                    <select className="" 
                        name="budget"
                        value={budget}
                        onChange={this.handleChange}
                        required
                    >
                        <option value="50" selected>Less than $100 per week</option>
                        <option value="100">$100 per week</option>
                        <option value="150">$150 per week</option>
                        <option value="200">$200 per week</option>
                        <option value="250">$250 per week</option>
                        <option value="300">$300 per week</option>
                        <option value="350">$350 per week</option>
                        <option value="400">Over $400 per week</option>
                    </select>
                    <label className="register-form__label">Profile Image: </label>
                    <input className="register-form__input" 
                        type="file"
                        onChange={this.setFile}
                        accept="image/png, image/jpeg"
                    />
    
                <button class="button button--primary" type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer,
        status: state.statusReducer
    }
}

export default connect(mapStateToProps)(RoomieRegister);