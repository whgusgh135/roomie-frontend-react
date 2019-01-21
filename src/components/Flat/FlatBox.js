import React from 'react';

import flatImage from '../../styles/img/flat-1.jpg'

export class FlatBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a href="#" className="flat-box">
                <img src={flatImage} alt="flat" className="flat-box__img" />
            </a>
        )
    }
}