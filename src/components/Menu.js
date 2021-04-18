import React from 'react';
import './Menu.css';

const Menu = ({ title }) => {
    return(
        <div className="menu">
            <p>{title}</p>
        </div>
    );
}

export default Menu;