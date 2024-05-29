import React from "react";
import Grid from "../Grid";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import './assets/Allies.css';

const companies = [
    {
        name: "Google",
        icon: <FaGoogle />,
    },
    {
        name: "Amazon",
        icon: <FaAmazon />,
    },
    {
        name: "Microsoft",
        icon: <FaMicrosoft />,
    },
    {
        name: "Apple",
        icon: <FaApple />,
    },
];


const Allies = () => {
    return (
        <div className="allies-container">
            <h2>Compañías que nos certifican</h2>
            <Grid columns={4}>
                {companies.map((company, index) => (
                    <div key={index} className="company">
                        {company.icon}
                    </div>
                ))}
            </Grid>
        </div>
    );
}

export default Allies;