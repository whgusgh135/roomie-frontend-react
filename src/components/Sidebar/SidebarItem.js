import React from 'react';
import { Link } from 'react-router-dom';

export const SidebarItem  = props => {
    return (
        <Link to={`/${props.item}`} className={props.status.page == props.item ? "side-items__item--active" : "side-items__item"}>
            <div className="side-items__link">{props.item}</div>
        </Link>
    )
}