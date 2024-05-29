import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './assets/Sidebar.css';

const Navitem = ({ title, icon, path }) => {
    const [active, setActive] = useState(false);
    const currentPath = window.location.pathname;

    useEffect(() => {
        setActive(currentPath === path);
    }
    , [currentPath, path]);

    return (
        <Link to={path} className={`nav-item ${active ? 'active' : ''}`}>
            <div className="nav-item__icon">{icon}</div>
            <div className="nav-item__title">
                {title}
            </div>
        </Link>
    );
};

Navitem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    active: PropTypes.bool,
};

export default Navitem;
