import React, {useEffect, useState} from 'react'
import dataLogo from '/datapath-logo.png'
import { Link } from 'react-router-dom'
import './assets/Header.css'

const Header = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

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
        <header className='header' style={{backgroundColor: hasScrolled ? '#fff' : 'transparent', borderBottom: hasScrolled ? '1px solid #eaeaea' : 'none'}}>
            <img src={dataLogo} className='header__logo' alt='Datapath logo' />
            <nav className='nav'>
                <ul className='nav-list'>
                    <li>
                        <Link to='/'>Cursos</Link>
                    </li>
                    <li>
                        <Link to='/'>Carreras</Link>
                    </li>
                    <li>
                        <Link to='/'>Diplomados</Link>
                    </li>
                    <li>
                        <Link to='/'>Empresas</Link>
                    </li>
                </ul>
            </nav>
            <div className='header-actions'>
                <Link to='/login'><button>Iniciar sesión</button></Link>
                <Link to='/register'><button>Registrarse</button></Link>
            </div>
        </header>
    )
}

export default Header