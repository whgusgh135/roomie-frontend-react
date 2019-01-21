import React from 'react';

export const SidebarItem  = props => {
    return (
        <li className="side-items__item">
            <a href="#" className="side-items__link">{props.item}</a>
        </li>
    )
}