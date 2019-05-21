import React from 'react';


export class RentDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            picNum: 0
        }
    }

    renderNextPic = () => {
        if(this.props.rent.rentImages.length - 1 === this.state.picNum) {
            this.setState({picNum: 0});
        } else {
            this.setState({picNum: this.state.picNum + 1});
        }
    }

    renderNextBtn = () => {
        if(this.props.rent.rentImages.length === 1) {
            return 
        } else {
            return(
                <div className="popup__rent-img--next" onClick={this.renderNextPic}>></div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="popup" onClick={this.props.renderPopup}>
                
                </div>
                <div className="popup__content">
                    <div className="popup__left--rent">
                        <img 
                            className="popup__rent-img"
                            src={`/api/image/${this.props.rent.rentImages[this.state.picNum]}`} 
                            alt="person"
                        />
                        {this.renderNextBtn()}
                    </div>
                    <div className="popup__rent-content">
                        <p><b>Property Type:</b> {this.props.rent.propertyType}</p>
                        <p><b>Region:</b> {this.props.rent.region}</p>
                        <p><b>Address:</b> {this.props.rent.address}</p>
                        <p><b>Number of Rooms:</b> {this.props.rent.numberOfRooms}</p>
                        <p><b>Max Resident:</b> {this.props.rent.maxResidents}</p>
                        <p><b>Rent Per Week:</b> {this.props.rent.rentPerWeek}</p>
                        <p><b>Description:</b> {this.props.rent.description ? this.props.rent.description : "(no description)"}</p>
                        <p><b>Phone Number:</b> {this.props.rent.phoneNumber ? this.props.rent.phoneNumber : "(no phone number)"}</p>
                        <p><b>Email:</b> {this.props.rent.email ? this.props.rent.email : "(no email)"}</p>                        
                    </div>
                </div>
            </div>
           
        )  
    }

}