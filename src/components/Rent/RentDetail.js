import React from 'react';


export class RentDetail extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="popup" onClick={this.props.renderPopup}>
                
                </div>
                <div className="popup__content">
                    <div className="roomie-detail__img-box">
                    
                    </div>
                </div>
            </div>
           
        )  
    }

}