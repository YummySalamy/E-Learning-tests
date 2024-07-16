import React, {useState, useEffect} from 'react';''
import {AiOutlineLoading} from 'react-icons/ai';
import './assets/Components.css';

const Button = ({label, onClick, disabled, icon, loading, styles, children}) => {
    const [loadingState, setLoadingState] = useState(loading);

    useEffect(() => {
        setLoadingState(loading);
    }, [loading]);

    return (
        <button
            className="button"
            onClick={onClick}
            disabled={disabled || loadingState}
            style={styles}
        >
            {loadingState ? <AiOutlineLoading className='loader' />: (
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    {icon}
                    {label ? label : children}
                </div>
            )}
        </button>
    );
}

export default Button;