import React from 'react';


export class RoomieDetail extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        if(this.props.auth.user.roomie) {
            return (
                <div className="home-list">
                    <div className="roomie-detail">
                        <div className="roomie-detail__img-box">
                        
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <div className="home-list">
                    <a href="#" className="roomie-box">
                        <img src={`/api/image/uploads/avatar-default.png`} alt="person" className="roomie-box__img" />
                        <p className="roomie-box__name">No Info</p>
                        <p className="roomie-box__address">No Info</p>
                        <button className="button button--primary">More</button>
                    </a>
                </div>
            )
        }
    }

}