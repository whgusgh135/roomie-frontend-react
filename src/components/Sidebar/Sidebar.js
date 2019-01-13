import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarProfile } from './SidebarProfie';

export class Sidebar extends React.Component {

    renderSidebarItems() {
        const sidebarItem = ["My account", "Home", "Roomie", "Flat"];
        return (
            sidebarItem.map(item => {
                return (
                    <SidebarItem item = {item}/>
                )
            })
        )
    }

    render() {
        

        return (
            <nav class="sidebar">
                <SidebarProfile />
                <ul class="side-items">
                    {this.renderSidebarItems()}
                </ul>
            </nav>
        )
    }
}