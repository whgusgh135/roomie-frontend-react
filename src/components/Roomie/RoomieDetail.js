import React from 'react';


export class RoomieDetail extends React.Component {
    constructor(props){
        super(props);
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
                        Name
                    </div>
                </div>
            </div>
           
        )  
    }

}