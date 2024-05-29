import React from 'react';
import Sidebar from './sidebar/Sibebar';
import AppHeader from '../../components/header/AppHeader';
import './assets/Application.css';

const Application = ({children}) => {
    return (
        <div className="main_wrapper">
            
            <Sidebar/>
            <div className="app-content">
                <AppHeader/>
                {children}
            </div>
        </div>
    );
}

export default Application;
