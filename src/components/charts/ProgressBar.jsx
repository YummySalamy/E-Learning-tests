import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress, showPercentage }) => {
    const [progressValue, setProgressValue] = useState(progress);

    useEffect(() => {
        setProgressValue(progress);
    }, [progress]);

    return (
        <div className="progress-bar">
            <div className="progress-bar-content">
                <div className="progress-bar-fill" style={{ width: `${progressValue}%` }}></div>
            </div>
            {showPercentage && <span className="progress-bar-percentage">{progressValue}%</span>}
        </div>
    );
}

export default ProgressBar;
