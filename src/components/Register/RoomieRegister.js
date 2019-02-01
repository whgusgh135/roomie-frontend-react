import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/auth';
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
        formData.append('profileImage', this.state.profileImage, this.state.profileImage.name);
        formData.append('phoneNumber', this.state.phoneNumber);
        formData.append('region', this.state.region);
        console.log(formData);
        this.props.dispatch(actions.createRoomie(formData));
    }

    setFile = event => {
        this.setState({profileImage: event.target.files[0]});
        console.log(event.target.files[0]);
        console.log(this.state);
    }

    render() {
        const { phoneNumber, region, minBudget, maxBudget } = this.state;

        return (
            <div class="auth">
                <form onSubmit={this.handleSubmit} class="auth_form">
                    <label>Phone Number: </label>
                    <input 
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Region: </label>
                    <input 
                        type="text"
                        name="region"
                        value={region}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Min Budget: </label>
                    <input 
                        type="text"
                        name="minBudget"
                        value={minBudget}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Max Budget: </label>
                    <input 
                        type="text"
                        name="maxBudget"
                        value={maxBudget}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Profile Image: </label>
                    <input 
                        type="file"
                        onChange={this.setFile}
                        accept="image/png, image/jpeg"
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

export default connect(mapStateToProps)(RoomieRegister);