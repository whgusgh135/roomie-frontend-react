import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/rent';
import FormData from 'form-data';
import { Redirect } from 'react-router-dom';

class RentRegister extends React.Component {
    constructor() {
        super();
        this.state = {
            propertyType: "",
            region: "",
            address: "",
            numberOfRooms: "",
            minResidents: "",
            maxResidents: "",
            rentPerWeek: "",
            description: "",
            rentImages: null
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        let formData = new FormData();
        if(this.state.rentImages) {
            for (let i = 0; i < this.state.rentImages.length; i++){
                formData.append('rentImages', this.state.rentImages[i]);
            }
        };
        formData.append('propertyType', this.state.propertyType);
        formData.append('region', this.state.region);
        formData.append('address', this.state.address);
        formData.append('numberOfRooms', this.state.numberOfRooms);
        formData.append('minResidents', this.state.minResidents);
        formData.append('maxResidents', this.state.maxResidents);
        formData.append('rentPerWeek', this.state.rentPerWeek);
        formData.append('description', this.state.description);

        this.props.dispatch(actions.createRent(formData));
    }

    setFile = event => {
        let rentImages = [];
        for(let i = 0; i < event.target.files.length; i++) {
            rentImages.push(event.target.files[i]);
        }
        this.setState({rentImages});
        console.log(event.target.files);
    }

    render() {
        const { propertyType,
                region,
                address,
                numberOfRooms,
                minResidents,
                maxResidents,
                rentPerWeek,
                description } = this.state;

        if(this.props.status.redirect == "home") {
            return <Redirect to="/home" />
        }

        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <h3 className="register-form__heading">Rent Registration</h3>
                    <label className="register-form__label">Property Type: </label>
                    <input className="register-form__input"
                        type="text"
                        name="propertyType"
                        value={propertyType}
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
                    <label className="register-form__label">Address: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="address"
                        value={address}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Number of Rooms: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="numberOfRooms"
                        value={numberOfRooms}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Minimum Number of Residents: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="minResidents"
                        value={minResidents}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Maximum Number of Residents: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="maxResidents"
                        value={maxResidents}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Rent Per Week: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="rentPerWeek"
                        value={rentPerWeek}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Description: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Rent Images: </label>
                    <input className="register-form__input" 
                        type="file"
                        onChange={this.setFile}
                        accept="image/png, image/jpeg"
                        multiple
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

export default connect(mapStateToProps)(RentRegister);