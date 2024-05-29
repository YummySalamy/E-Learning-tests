import React from 'react';
import Header from '../components/header/Header';
import './assets/Layouts.css';

const FullLayout = ({ children }) => {
    return (
        <div className="full-layout">
            <Header />
            {children}
        </div>
    );
};

export default FullLayout;
