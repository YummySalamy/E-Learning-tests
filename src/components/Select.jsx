import React, {useEffect, useState} from 'react';
import './assets/Components.css';


const Select = ({label, options, value, onChange}) => {

    const [selected, setSelected] = useState(value);

    useEffect(() => {
        setSelected(value);
    }, [value]);

    return (
        <div className="select">
            <label>{label}</label>
            <select
                className="select-input"
                value={selected}
                onChange={(e) => {
                    setSelected(e.target.value);
                    onChange(e.target.value);
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;