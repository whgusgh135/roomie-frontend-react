import React from 'react';
import { RoomieDetail } from './RoomieDetail';

export class RoomieBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false
        }
    }

    renderPopup = () => {
        this.setState({popup: !this.state.popup});
    }
    
    renderRoomieDetail = () => {
        if(this.state.popup){
            return (
                <RoomieDetail 
                    roomie={this.props.roomie}
                    renderPopup={this.renderPopup}
                />
            )
        }
    }

    render() {
        return (
            <div href="#" className="roomie-box">
                <img src={`/api/image/${this.props.roomie.profileImage}`} alt="person" className="roomie-box__img" />
                <p className="roomie-box__name">{this.props.roomie.name}</p>
                <p className="roomie-box__address">{this.props.roomie.region}</p>
                <button className="button button--primary" onClick={this.renderPopup}>More</button>
                {this.renderRoomieDetail()}
            </div>
        )
    }
}