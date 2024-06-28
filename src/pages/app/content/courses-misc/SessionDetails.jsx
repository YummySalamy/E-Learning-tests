import React, {useState, useEffect} from React;

const SessionDetails = ({session}) => {
    const [assignations, setAssignations] = useState([]);
    const [expandedAssignations, setExpandedAssignations] = useState({});

    useEffect(() => {
        setAssignations(session.assignations);
    }, [session]);

    const toggleExpand = (index) => {
        setExpandedAssignations(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className='session-details'>
            <div className="session-details-header">
                <div className="session-details-title">
                    {session.title}
                </div>
                <div className="session-details-date">
                    {session.date}
                </div>
            </div>
            <div className="session-details-assignations">
                {assignations.map((assignation, index) => (
                    <div key={index} className="assignation-item">
                        <div className="assignation-title">{assignation.title}</div>
                        <div className="assignation-state">{assignation.state}</div>
                        <div className="assignation-buttons">
                            <button className="assignation-button" title="Ver material de curso">
                                <FaFolder />
                            </button>
                            <button className="assignation-button" title="Ver asignación">
                                <IoIosCloseCircleOutline />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SessionDetails;