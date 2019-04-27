import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/rent';
import FormData from 'form-data';
import { Redirect } from 'react-router-dom';
import { setRedirect } from '../../redux/actions/status';

class RentEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            propertyType: "",
            region: "",
            address: "",
            numberOfRooms: "",
            maxResidents: "1",
            rentPerWeek: "",
            description: "",
            phoneNumber: "",
            email: "",
            rentImages: [],
            id: ""
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        let index = this.props.auth.user.rent.findIndex(rent => rent._id == id);

        if(index == -1) {
            this.props.dispatch(setRedirect("home"));
        } else {
            this.setState({
                propertyType: this.props.auth.user.rent[index].propertyType,
                region: this.props.auth.user.rent[index].region,
                address: this.props.auth.user.rent[index].address,
                numberOfRooms: this.props.auth.user.rent[index].numberOfRooms,
                maxResidents: this.props.auth.user.rent[index].maxResidents,
                rentPerWeek: this.props.auth.user.rent[index].rentPerWeek,
                description: this.props.auth.user.rent[index].description,
                phoneNumber: this.props.auth.user.rent[index].phoneNumber,
                email: this.props.auth.user.rent[index].email,
                id
            });
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
        formData.append('maxResidents', this.state.maxResidents);
        formData.append('rentPerWeek', this.state.rentPerWeek);
        formData.append('description', this.state.description);
        formData.append('phoneNumber', this.state.phoneNumber);
        formData.append('email', this.state.email);

        this.props.dispatch(actions.editRent(formData, this.props.auth.user.userId, this.state.id));
    }

    setFile = event => {
        let rentImages = [];
        for(let i = 0; i < event.target.files.length; i++) {
            rentImages.push(event.target.files[i]);
        }
        this.setState({rentImages});
    }

    render() {
        const { propertyType,
                region,
                address,
                numberOfRooms,
                maxResidents,
                rentPerWeek,
                phoneNumber,
                email,
                description } = this.state;

        if(this.props.status.redirect == "home" ||
            !this.props.auth.isAuthenticated) {
            return <Redirect to="/home" />
        }

        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <h3 className="register-form__heading">Rent Edit</h3>
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
                        type="number"
                        name="numberOfRooms"
                        value={numberOfRooms}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Maximum Number of Residents: </label>
                    <select 
                        name="maxResidents"
                        value={maxResidents}
                        onChange={this.handleChange}
                        required
                    >
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5+</option>
                    </select>
                    <label className="register-form__label">Rent Per Week: </label>
                    <input className="register-form__input" 
                        type="number"
                        name="rentPerWeek"
                        value={rentPerWeek}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Phone Number(optional): </label>
                    <input className="register-form__input" 
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleChange}
                    />
                    <label className="register-form__label">Email(optional): </label>
                    <input className="register-form__input" 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <label className="register-form__label">Description: </label>
                    <textarea className="register-form__textarea" 
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleChange}
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

export default connect(mapStateToProps)(RentEdit);