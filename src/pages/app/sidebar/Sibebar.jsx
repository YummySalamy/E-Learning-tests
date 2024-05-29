import React, {useEffect, useState} from 'react';
import Navitem from './Navitem';
import MenuItems from './MenuItems';
import dataLogo from '/src/assets/datapath-logo.png';
import './assets/Sidebar.css';

const Sidebar = () => {
    const [active, setActive] = useState('');
    const items = MenuItems;

    useEffect(() => {
        const currentPath = window.location.pathname;
        const path = currentPath;
        console.log('currentPath:', currentPath);
        console.log('path:', path);
        setActive(path);
    }
    , [active]);

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={dataLogo} alt="logo" />
            </div>
            <div className="sidebar-nav">
                {items.map((item, index) => (
                    item.subheader ? (
                        <div key={index} className="nav-subheader">{item.subheader}</div>
                    ) : (
                        <Navitem
                            key={index}
                            item={item}
                            title={item.title}
                            icon={item.icon}
                            active={active === item.path}
                            path={item.path}
                        />
                    )
                ))}
                <button 
                    className="sidebar-logout-button"
                    onClick={() => {
                        window.location.href = '/login';
                    }}
                >
                    Salir
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
