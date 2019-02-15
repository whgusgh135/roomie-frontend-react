import React from 'react';

// replace this later with data
import rentImage from '../../styles/img/flat-1.jpg'

export class RentBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rentImage: "/api/image/" + this.props.rent.rentImages[0]
        }
    }

    render() {
        return(
            <a href="#" className="flat-box">
                <img src={this.state.rentImage} alt="rent" className="flat-box__img" />
            </a>
        )
    }
}