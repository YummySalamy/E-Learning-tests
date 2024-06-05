import React, { useEffect, useState } from 'react';

const ProgressCircle = ({ progress }) => {
    const [progressValue, setProgressValue] = useState(progress);

    useEffect(() => {
        setProgressValue(progress);
    }, [progress]);

    return (
        <div className="progress-circle">
            
            <div className="progress-circle-content">
                <span>{progressValue}%</span>
            </div>
        </div>
    );
}

export default ProgressCircle;