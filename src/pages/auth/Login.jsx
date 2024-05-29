import React,{useState, useEffect} from 'react';
import dataLogo from '../../assets/datapath-logo.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { signInWithGoogle } from '../../auth/scripts.js';
import { signIn } from '../../auth/scripts.js';
import './assets/Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailLogin = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
        signIn(email, password)
            .then(() => {
                window.location.href = '/app/dashboard';
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError(error.message);
            setLoading(false);
        }
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(() => {
                window.location.href = '/app';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión con Google:', error);
            });
    }

    useEffect(() => {
        console.log('loading:', loading);
    }, [loading]);

    return (
        <div className="login-container">
            <div className="form-container">
                {/* Login form */}
                <form className="login-form">
                    <img className='login-icon' src={dataLogo} alt="Datapath logo" />
                    <h2 style={{margin:0}}>Iniciar sesión</h2>
                    <input type="text" placeholder="Usuario o correo" value={email} onChange={handleEmailChange} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                    <button
                        className='google-login'
                        type='submit'
                        onClick={handleEmailLogin}
                    >
                        {loading ? <AiOutlineLoading className='loader' /> : 'Iniciar sesión'}
                    </button>
                </form>
                <span className='forgot-password' >¿Olvidaste tu contraseña?</span>
                { error &&
                <p className='error' style={{color: 'red'}}><MdError/>{error}</p>
                }
                <p>¿No tienes cuenta? <a href="/register">Registrate</a></p>
            </div>
            {/* <div className="image-container">
                <img src="path/to/image" alt="datapath-bg" />
            </div> */}
        </div>
    );
};

export default Login;