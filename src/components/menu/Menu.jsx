import React from 'react';
import Button from '../Button';
import { FaRegGrinStars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './assets/Menu.css';

const Menu = ({ subitems }) => {
    return (
        <div className="menu">
            <h3 className="menu-title">Menú</h3>
            <ul className="menu-list">
                {subitems.map((subitem, index) => (
                    <li className='menu-item' key={index}>{subitem}</li>
                ))}
            </ul>
            <Link
                to='/app/memberships'
                style={{textDecoration: 'none', padding: '20px'}}
            >
                <Button
                    className='menu-button'
                    label='Suscribirse'
                    icon={<FaRegGrinStars />}
                    styles={{width: '100%'}}
                />
            </Link>
        </div>
    );
};

export default Menu;
