import React from 'react';
import { Link } from 'react-router-dom';

export class RoomieDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            roomieId: this.props.roomie._id,
            message: ""
        }
    }

    renderDesc = () => {
        if(this.props.roomie.description === "") {
            return "No description";
        } else {
            return '"' + this.props.roomie.description + '"';
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    renderMessage = () => {
        if(this.props.auth.isAuthenticated) {
            return (
                <form onSubmit={this.handleSubmit} className="roomie-box__form">
                    <h3 className="roomie-box__form-title">Send Message</h3>  

                    <textarea className="roomie-box__message-box"
                        type="text"
                        name="message"
                        maxlength="100"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    
                    <button class="button button--primary" type="submit">Send</button>

                </form>
            );
        } else {
            return (
                <form onSubmit={this.handleSubmit} className="roomie-box__form">
                    <h3 className="roomie-box__form-title">Send Message</h3>  

                    <textarea className="roomie-box__message-box"
                        type="text"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        value="Please log in to send message"
                        disabled
                    />
                    
                    <Link to="/userlogin" class="button button--primary">Login</Link>

                </form>
            );
        }
    }

    render() {
        return (
            <div>
                <div className="popup" onClick={this.props.renderPopup}>
                
                </div>
                <div className="popup__content">
                    <div className="popup__left">
                        <img 
                            className="popup__roomie-img"
                            src={`/api/image/${this.props.roomie.profileImage}`} 
                            alt="person"
                        />   
                    </div>
                    <div className="popup__roomie-content">
                        <p className="popup__roomie-content--name">{this.props.roomie.name}</p>
                        <p className="popup__roomie-content--region">{this.props.roomie.region}</p>
                        <p className="popup__roomie-content--budget">(Budget: Up to ${this.props.roomie.budget} per week)</p>
                        <p className="popup__roomie-content--desc">{this.renderDesc()}</p>
                        {this.renderMessage()}
                    </div>
                </div>
            </div>
           
        )  
    }

}