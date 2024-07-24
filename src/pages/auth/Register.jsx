import React, { useState } from 'react';
import dataLogo from '../../assets/datapath-logo.png';
import { Link } from 'react-router-dom';
import { FaGoogle, FaMoneyBill } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoIosSchool, IoIosCalendar } from "react-icons/io";
import { MdOutlineUploadFile } from "react-icons/md";
import { signUp, signInWithGoogle } from '../../auth/scripts.js';
import Steps from './auth-misc/Steps.jsx';
import Select from '../../components/selectors/Select.jsx';
import './assets/Auth.css';


// Curso AWS Data Engineer
// Curso Azure Data Engineer
// Curso Data Analyst con Power BI
// Curso Data Analyst con SQL y Python
// Curso Databricks Data Engineer
// Curso GCP Data Enginer
// Programa AI PROMPT ENGINEER
// Programa AWS Certified Data Engineer Associate
// Programa Data Analyst
// Programa Data Engineer
// Programa Data, Analytics & IA en Azure
// Programa Machine Learning Engineer
const dummyCourses = [
    {
        id: 1,
        title: 'Curso AWS Data Engineer',
    },
    {
        id: 2,
        title: 'Curso Azure Data Engineer',
    },
    {
        id: 3,
        title: 'Curso Data Analyst con Power BI',
    },
    {
        id: 4,
        title: 'Curso Data Analyst con SQL y Python',
    },
    {
        id: 5,
        title: 'Curso Databricks Data Engineer',
    },
    {
        id: 6,
        title: 'Curso GCP Data Enginer',
    },
    {
        id: 7,
        title: 'Programa AI PROMPT ENGINEER',
    },
    {
        id: 8,
        title: 'Programa AWS Certified Data Engineer Associate',
    },
    {
        id: 9,
        title: 'Programa Data Analyst',
    },
    {
        id: 10,
        title: 'Programa Data Engineer',
    },
    {
        id: 11,
        title: 'Programa Data, Analytics & IA en Azure',
    },
    {
        id: 12,
        title: 'Programa Machine Learning Engineer',
    },
];

const Register = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [uploadedFile, setUploadedFile] = useState(false);
    const [formData, setFormData] = useState({
        processType: '',
        firstTime: true,
        course: '',
        courseNumber: '',
        pricePayed: '',
        currency: 'USD',
        firstName: '',
        lastName: '',
        email: '',
        birthdate: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const steps = ['Step 1', 'Step 2', 'Step 3'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (currentStep === 1) {
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
                    { currentStep === 0 ? (
                        <div className='register-form'>
                            <h4>¿Es tu primera vez como estudiante Datapath?</h4>
                            <Select
                                value={formData.firstTime}
                                onChange={(value) => setFormData({ ...formData, firstTime: value})}
                                options={[
                                    { label: 'Sí', value: true },
                                    { label: 'No', value: false }
                                ]}
                            />
                            <h4>Tipo de proceso</h4>
                            <Select
                                value={formData.processType}
                                onChange={(value) => setFormData({ ...formData, processType: value})}
                                options={[
                                    { label: 'Matrícula', value: 'Matrícula' },
                                    { label: 'Pago segunda/+ cuota', value: 'Pago segunda/+ cuota' },
                                ]}
                            />
                            <h4>Curso<IoIosSchool/></h4>
                            <Select
                                value={formData.course}
                                onChange={(value) => setFormData({ ...formData, course: value})}
                                options={dummyCourses.map(course => ({ label: course.title, value: course.title }))}
                            />
                            <h4>Número de curso<IoIosCalendar/></h4>
                            <input
                                type="text"
                                name="courseNumber"
                                placeholder="Número de curso"
                                value={formData.courseNumber}
                                onChange={handleChange}
                            />
                            <h4>Precio pagado<FaMoneyBill/></h4>
                            <input
                                type="text"
                                name="pricePayed"
                                placeholder="Precio pagado"
                                value={formData.pricePayed}
                                onChange={handleChange}
                            />
                            <h4>Moneda<GrMoney/></h4>
                            <Select
                                value={formData.currency}
                                onChange={(value) => setFormData({ ...formData, currency: value})}
                                options={[
                                    { label: 'USD (United States Dollar)', value: 'USD' },
                                    { label: 'SOL (Perú Currency)', value: 'SOL' },
                                    { label: 'COP (Colombian Pesos)', value: 'COP' },
                                ]}
                            />
                            <button
                                className='upload-button'
                                type='button'
                                onClick={() => setUploadedFile(true)}
                            >
                                Subir comprobante de pago<MdOutlineUploadFile/>
                            </button>
                            <button
                                className={uploadedFile ? 'login-button' : 'login-button-disabled'}
                                onClick={() => setCurrentStep(1)}
                                disabled={!uploadedFile}
                                title={uploadedFile ? '' : 'Por favor suba el comprobante de pago.'}
                            >
                                {uploadedFile ? 'Siguiente' : 'No se ha subido el comprobante de pago'}
                            </button>
                        </div>
                    ): currentStep === 1 ? (
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
                    ) : currentStep === 2 ? (
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
                    ) : (
                        <>
                        </>
                    )
                }
                </form>
                <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
            </div>
        </div>
    );
};

export default Register;

