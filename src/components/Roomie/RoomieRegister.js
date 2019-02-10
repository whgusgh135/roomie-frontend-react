import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/roomie';
import FormData from 'form-data';

class RoomieRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            phoneNumber: "",
            region: "",
            minBudget: "",
            maxBudget: "",
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
        formData.append('minBudget', this.state.minBudget);
        formData.append('maxBudget', this.state.maxBudget);

        this.props.dispatch(actions.createRoomie(formData));
    }

    setFile = event => {
        this.setState({profileImage: event.target.files[0]});
    }

    render() {
        const { phoneNumber, region, minBudget, maxBudget } = this.state;

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
                    <label className="register-form__label">Min Budget: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="minBudget"
                        value={minBudget}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Max Budget: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="maxBudget"
                        value={maxBudget}
                        onChange={this.handleChange}
                        required
                    />
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
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(RoomieRegister);