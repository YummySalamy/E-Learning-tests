import React from 'react';
import './assets/Menu.css';

const Menu = ({ subitems }) => {
    return (
        <div className="menu">
            <ul className="menu-list">
                {subitems.map((subitem, index) => (
                    <li key={index}>{subitem}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
