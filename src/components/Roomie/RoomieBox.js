import React from 'react';

// replace this with data from api call later
import img1 from '../../styles/img/person-1.jpg';
import img2 from '../../styles/img/person-2.jpg';
import img3 from '../../styles/img/person-3.jpg';

export class RoomieBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href="#" className="roomie-box">
                <img src={`/api/image/${this.props.roomie.profileImage}`} alt="person" className="roomie-box__img" />
                <p className="roomie-box__name">{this.props.roomie.name}</p>
                <p className="roomie-box__address">{this.props.roomie.region}</p>
                <button className="button button--primary">More</button>
            </a>
        )
    }
}