import React from 'react';
import { Link } from 'react-router-dom';

export class MyAccountRentBox extends React.Component {

    render() {
        return(
            <Link to={`/rentedit/${this.props.rent._id}`} className="rent-box">
                <img src={`/api/image/${this.props.rent.rentImages[0]}`} alt="rent" className="rent-box__img" onClick={this.renderPopup}/>
                <figcaption className="rent-box__caption">
                    <p className="rent-box__caption--edit">Click to Edit</p>
                </figcaption>
            </Link>
        )
    }
}