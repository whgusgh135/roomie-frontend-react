import React from 'react';

// replace this later with data
import rentImage from '../../styles/img/flat-1.jpg'

export class RentBox extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <a href="#" className="flat-box">
                <img src={`/api/image/${this.props.rent.rentImages[0]}`} alt="rent" className="flat-box__img" />
            </a>
        )
    }
}