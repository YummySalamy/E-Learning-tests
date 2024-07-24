import React from 'react';
import dataLogo from '/src/assets/datapath-logo.png';
import '../assets/ExtraHelpers.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-content">
                <div className="banner-logo">
                    <img src={dataLogo}
                        alt="logo"
                    />
                    <h2>Memberships</h2>
                </div>
                {/* <p>En este espacio podrás encontrar toda la información relacionada con tu membresía.</p> */}
            </div>
        </div>
    );
}

export default Banner;