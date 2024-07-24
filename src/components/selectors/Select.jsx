import React, { useState, useEffect, useRef } from 'react';
import { HiSelector } from "react-icons/hi";
import './assets/Selectors.css';

const Select = ({ value, onChange, style, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);
    const wrapperRef = useRef(null);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleOptionClick = (option) => {
        setSelectedValue(option.value);
        onChange(option.value);
        setIsOpen(false);
    };

    const selectedOptionLabel = options.find(option => option.value === selectedValue)?.label || 'Seleccionar...';

    return (
        <div className="select-wrapper" style={style} ref={wrapperRef}>
            <div className="select" onClick={() => setIsOpen(!isOpen)}>
                {selectedOptionLabel}
                <span className="select-icon">
                    <HiSelector />
                </span>
            </div>
            {isOpen && (
                <div className="options-list">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`option ${selectedValue === option.value ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;