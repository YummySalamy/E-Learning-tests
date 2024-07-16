import React, { useState } from 'react';
import dataLogo from '../../assets/datapath-logo.png';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { signUp, signInWithGoogle } from '../../auth/scripts.js';
import Steps from './auth-misc/Steps.jsx';
import './assets/Auth.css';

const Register = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const steps = ['Step 1', 'Step 2'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (currentStep === 0) {
            if (formData.firstName && formData.lastName && formData.email && formData.birthdate) {
                setCurrentStep(currentStep + 1);
            } else {
                alert('Por favor complete todos los campos.');
            }
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        if (formData.username === '' || formData.password === '') {
            alert('Por favor complete todos los campos.');
            return;
        }

        signUp(formData.email, formData.password)
            .then(() => {
                window.location.href = '/app/dashboard';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión:', error);
            });
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then(() => {
                window.location.href = '/app';
            })
            .catch((error) => {
                console.error('Error al iniciar sesión con Google:', error);
            });
    };

    return (
        <div className="login-container">
            
            <div className="form-container">
                <form className="login-form">
                    <img className='login-icon' src={dataLogo} alt="Datapath logo" />
                    <h2 style={{ margin: 0 }}>Registro</h2>
                    <Steps steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    {currentStep === 0 ? (
                        <>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Nombre"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Apellido"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <input
                                type="date"
                                name="birthdate"
                                placeholder="Fecha de nacimiento"
                                value={formData.birthdate}
                                onChange={handleChange}
                            />
                            <button
                                className='login-button'
                                type='submit'
                                onClick={handleNextStep}
                            >
                                Siguiente
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                name="username"
                                placeholder="Usuario"
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmar contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                className='login-button'
                                type='submit'
                                onClick={handleRegister}
                                disabled={
                                    formData.username === '' || formData.password === '' || formData.password !== formData.confirmPassword
                                }
                            >
                                Registrar
                            </button>
                            <button className='google-login' onClick={handleGoogleLogin}>
                                <FaGoogle />
                                Registro con Google
                            </button>
                        </>
                    )}
                </form>
                <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
            </div>
        </div>
    );
};

export default Register;

