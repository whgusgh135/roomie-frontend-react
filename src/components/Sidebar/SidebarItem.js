import React from 'react';

export const SidebarItem  = props => {
    return (
        <li class="side-items__item">
            <a href="#" class="side-items__link">{props.item}</a>
        </li>
    )
}