import React, { useState, useEffect } from 'react';

import './assets/Components.css';

const List = ({ items }) => {
    return (
        <div className="list">
            {items.map((item, index) => (
                <div key={index} className="list-item">
                    {item}
                </div>
            ))}
        </div>
    );
}

export default List;