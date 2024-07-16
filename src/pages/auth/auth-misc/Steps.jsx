import React from 'react';
import { FaCheck } from "react-icons/fa";
import '.././assets/Auth.css';

const Steps = ({ steps, currentStep, setCurrentStep }) => {
    return (
        <div className="steps-container">
            {steps.map((step, index) => (
                <div key={index} className="step">
                    <div 
                        className={`step-label ${currentStep === index ? 'current-step' : ''} ${currentStep > index ? 'completed-step' : ''}`}
                        onClick={() => setCurrentStep(index)}
                    >
                        {currentStep > index ? <FaCheck /> : index + 1}
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`step-line ${currentStep > index ? 'completed-line' : ''}`}></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Steps;
