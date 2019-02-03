import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarItem  = props => {
    return (
        <Link to={`/${props.item}`} className="side-items__item">
            <div className="side-items__link">{props.item}</div>
        </Link>
    )
}