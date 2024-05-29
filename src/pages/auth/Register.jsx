import React,{useState} from 'react';
import dataLogo from '../../assets/datapath-logo.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { signUp, signInWithGoogle } from '../../auth/scripts.js';
import './assets/Auth.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        signUp(email, password)
            .then(() => {
                window.location.href = '/app/dashboard';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión:', error);
            });
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

    return (
        <div className="login-container">
            <div className="form-container">
                {/* Login form */}
                <form className="login-form">
                    <img className='login-icon' src={dataLogo} alt="Datapath logo" />
                    <h2 style={{margin:0}}>Registro</h2>
                    <input type="text" placeholder="Usuario o correo" value={email} onChange={handleEmailChange} />
                    <input type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange} />
                    <button
                        className='login-button'
                        type='submit'
                        onClick={handleRegister}
                    >
                        Registrar
                    </button>
                    <button className='google-login' onClick={handleGoogleLogin}>
                        <FaGoogle />
                        Registro con Google
                    </button>
                </form>
                <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
            </div>
            {/* <div className="image-container">
                <img src="path/to/image" alt="datapath-bg" />
            </div> */}
        </div>
    );
};

export default Register;