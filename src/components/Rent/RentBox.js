import React from 'react';
import { RentDetail } from './RentDetail';

export class RentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            popup: false
        }
    }

    renderPopup = () => {
        this.setState({popup: !this.state.popup});
    }

    renderRentDetail = () => {
        if(this.state.popup){
            return (
                <RentDetail 
                    rent={this.props.rent}
                    renderPopup={this.renderPopup}
                />
            )
        }
    }

    render() {
        return(
            <div href="#" className="rent-box">
                <img src={`/api/image/${this.props.rent.rentImages[0]}`} alt="rent" className="rent-box__img" onClick={this.renderPopup}/>
                <figcaption className="rent-box__caption" onClick={this.renderPopup}>
                    <p className="rent-box__caption--region">{this.props.rent.region}</p>
                    <p className="rent-box__caption--rent">${this.props.rent.rentPerWeek} per week</p>
                    <p className="rent-box__caption--rent">Residents allowed: {this.props.rent.maxResidents}</p>
                </figcaption>
                {this.renderRentDetail()}
            </div>
        )
    }
}