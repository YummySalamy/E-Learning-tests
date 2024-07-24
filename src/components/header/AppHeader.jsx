import React, {useEffect, useState} from 'react'
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import './assets/Header.css'

const AppHeader = () => {

    const [hasScrolled, setHasScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [menuItems, setMenuItems] = useState([
        'Perfil',
        'Cursos',
        'Carreras',
        'Empresas'
    ]);


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 1) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }
    );

    return (
        <header className='header' style={{backgroundColor: hasScrolled ? 'transparent' : '#fff', paddingInline: '20px'}}>
            <h2 className='header-title'>¡Hola, Data-User! 😁</h2>
            <div className='header-user-icon' onClick={() => setShowMenu(!showMenu)}>
                <FaRegUser />
                {showMenu && <Menu subitems={menuItems} />}
            </div>
        </header>
    )
}

export default AppHeader