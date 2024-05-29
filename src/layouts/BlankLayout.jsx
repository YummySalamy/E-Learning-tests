import React from 'react';
import PropTypes from 'prop-types';
import HelpChat from '../components/floating_button/HelpChat';
import './assets/Layouts.css';

const BlankLayout = ({ children }) => {
    return (
        <div className="blank-layout">
            <main>
                {children}
            </main>
            <HelpChat />
        </div>
    );
};

BlankLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BlankLayout;
