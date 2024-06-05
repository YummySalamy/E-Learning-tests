import React from 'react';

const Card = ({children, styles, button, buttonAction, buttonProps}) => {
    return (
        <div className="card" style={styles}>
            {children}
            {button && (
                <button onClick={buttonAction} style={buttonProps.style || {}}>
                    {button}
                </button>
            )}
        </div>
    );
};

export default Card;