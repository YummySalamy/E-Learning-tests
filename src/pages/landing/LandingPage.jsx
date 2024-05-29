import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Allies from "../../components/allies/Allies";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
    return (
        <div className="full-layout">
            <Header />
            <Hero/>
            <Allies/>
            <Footer/>
        </div>
    );
};

export default LandingPage;