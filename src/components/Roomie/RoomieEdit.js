import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/roomie';
import FormData from 'form-data';
import { Redirect } from 'react-router-dom';

class RoomieEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: props.auth.user.roomie.region,
            budget: props.auth.user.roomie.budget,
            description: props.auth.user.roomie.description,
            profileImage: null,
            userId: props.auth.user.userId
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
        formData.append('description', this.state.description);
        formData.append('region', this.state.region);
        formData.append('budget', this.state.budget);

        this.props.dispatch(actions.editRoomie(formData, this.state.userId));
    }

    handleDelete = event => {
        event.preventDefault();
        if(window.confirm("Do you really want to delete your roomie detail?")) {
            this.props.dispatch(actions.deleteRoomie(this.state.userId));
        };
    }

    setFile = event => {
        this.setState({profileImage: event.target.files[0]});
    }

    render() {
        const { description, region, budget } = this.state;

        if(this.props.status.redirect === "home" ||
            !this.props.auth.isAuthenticated) {
           return <Redirect to="/home" />
        }
        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="register-form">
                    <h3 className="register-form__heading">Roomie Detail</h3> 
                <button className="button button--delete" onClick={this.handleDelete}>Delete</button>
                    
                    <label className="register-form__label">Region: </label>
                    <input className="register-form__input" 
                        type="text"
                        name="region"
                        value={region}
                        onChange={this.handleChange}
                        required
                    />
                    <label className="register-form__label">Budget: </label>
                    <select className="register-form__input" 
                        name="budget"
                        value={budget}
                        onChange={this.handleChange}
                        required
                    >
                        <option value="100">Up to $100 per week</option>
                        <option value="150">Up to $150 per week</option>
                        <option value="200">Up to $200 per week</option>
                        <option value="250">Up to $250 per week</option>
                        <option value="300">Up to $300 per week</option>
                        <option value="350">Up to $350 per week</option>
                        <option value="400">Over $400 per week</option>
                    </select>
                    <label className="register-form__label">Describe yourself(optional): </label>
                    <textarea className="register-form__textarea"
                        type="text"
                        name="description"
                        maxlength="70"
                        value={description}
                        onChange={this.handleChange}
                    />
                    <label className="register-form__label">Profile Image: </label>
                    <input className="register-form__input" 
                        type="file"
                        onChange={this.setFile}
                        accept="image/png, image/jpeg"
                    />
                <button className="button button--primary" type="submit">Save Changes</button>

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

export default connect(mapStateToProps)(RoomieEdit);