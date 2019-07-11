import React from 'react';
import './nav.css';
import Navitem from './nav-item';

export default props => 
    <aside className="menu-area">
        {/* refac, create a menu component nav-item */}
        <nav className="menu">
            <Navitem url="#/" icon="home" title="Home" />
            <Navitem url="#/users" icon="users" title="Users" />
        </nav>
    </aside>