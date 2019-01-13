import React from 'react';

// replace this with data from api call later
import img1 from '../../styles/img/person-1.jpg';
import img2 from '../../styles/img/person-2.jpg';
import img3 from '../../styles/img/person-3.jpg';

export class RoomieBox extends React.Component {
    constructor(props) {
        super(props);
    }
    // replace this later
    renderImage(){
        let something;
        if(this.props.roomie.id == "1") {
            something = <img src={img1} alt="person" class="roomie-box__img" />
        } else if(this.props.roomie.id == "2") {
            something = <img src={img2} alt="person" class="roomie-box__img" />
        } else {
            something = <img src={img3} alt="person" class="roomie-box__img" />
        }
        return something;
    }

    render() {
        return (
            <a href="#" class="roomie-box">
                {this.renderImage()}
                <p class="roomie-box__name">{this.props.roomie.name}</p>
                <p class="roomie-box__address">{this.props.roomie.address}</p>
                <button class="button--primary">More</button>
            </a>
        )
    }
}