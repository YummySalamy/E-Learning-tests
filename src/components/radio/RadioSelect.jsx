import React, { useState, useEffect } from 'react';
import './assets/Radio.css';

const RadioSelect = ({ options, selected, setSelected }) => {
    const [selectedState, setSelectedState] = useState(selected);

    useEffect(() => {
        setSelectedState(selected);
    }, [selected]);

    const handleClick = (value) => {
        setSelected(value);
        setSelectedState(value);
    };

    return (
        <div className="wrapper">
            {options.map((option, index) => (
                <div key={index} className="option">
                    <input
                        checked={selectedState === option.value}
                        value={option.value}
                        name="btn"
                        type="radio"
                        className="input"
                        onChange={() => handleClick(option.value)}
                    />
                    <div className="btn">
                        <span className="span">{option.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RadioSelect;
