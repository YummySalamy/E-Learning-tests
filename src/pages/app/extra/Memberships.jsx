import React from 'react';
import Banner from './extra-helpers/memberships/Banner';
import About from './extra-helpers/memberships/About';
import MonthPreview from './extra-helpers/memberships/MonthPreview';
import './assets/Extra.css';

const Memberships = () => {
    return (
        <div className="memberships">
            <Banner/>
            <MonthPreview/>
            <About/>
        </div>
    )
}

export default Memberships;