import React, { useState } from 'react';
import Card from '../../../components/Card';
import CourseAdmin from './courses-misc/CourseAdmin';
import Grid from '../../../components/Grid';
import ProgressCircle from '../../../components/charts/ProgressCircle';
import Select from '../../../components/Select';

import './assets/Content.css';

const dummyMyCourses = [
    {
        title: 'Digital Marketing',
        content: 'Profesor: John Doe',
        progress: '50',
        button: 'Continuar',
        description: 'Capacítate en marketing digital con los mejores profesionales de la industria. Aprende a crear campañas efectivas y a medir su impacto.',
    },
    {
        title: 'Diseño de Interfaces',
        content: 'Profesor: Michael Sterling',
        progress: '25',
        button: 'Continuar',
    },
];

const dummyOtherCourses = [
    {
        title: 'Machine Learning 10',
        content: 'Estudiantes: 128',
        button: 'Ver cursos',
        buttonAction: () => alert('Button 7 clicked')
    },
    {
        title: 'Node.js 10',
        content: 'Estudiantes: 128',
        button: 'Ver cursos',
        buttonAction: () => alert('Button 8 clicked')
    },
    {
        title: 'MongoDB ',
        content: 'Estudiantes: 128',
        button: 'Ver cursos',
        buttonAction: () => alert('Button 9 clicked')
    },
    {
        title: 'Aplicaciones web con React.js ',
        content: 'Estudiantes: 128',
        button: 'Ver cursos',
        buttonAction: () => alert('Button 10 clicked')
    },
];

const Courses = () => {
    const [cards] = useState(dummyMyCourses);
    const [selectedTab, setSelectedTab] = useState('my-courses');
    const [selectedCourseData, setSelectedCourseData] = useState({});
    return (
        <div className="courses">
            { selectedTab &&
            <Select
                label="Filtrar por"
                options={[
                    {label: 'Mis cursos', value: 'my-courses'},
                    {label: 'Otros cursos', value: 'other-courses'},
                ]}
                value={selectedTab}
                onChange={(value) => {
                    setSelectedTab(value);
                }}
            />
            }
            { selectedTab === 'my-courses' ? (
            <div className="courses-main-tab">
                <Grid columns={3}>
                    {cards.map((card, index) => (
                        <Card key={index} styles={{margin: '1rem'}}>
                            <h3>{card.title}</h3>
                                <ProgressCircle progress={card.progress} />
                                <p>{card.content}</p>
                                <button
                                    onClick={() => {
                                        setSelectedCourseData(card);
                                        setSelectedTab(null);
                                    }}
                                >{card.button}</button>
                        </Card>
                    ))}
                </Grid>
            </div>
            ) : selectedTab === 'other-courses' ? (
                <div className="courses-main-tab">
                <Grid columns={3}>
                    {dummyOtherCourses.map((card, index) => (
                        <Card key={index} styles={{margin: '1rem'}}>
                            <h2>{card.title}</h2>
                            <button onClick={card.buttonAction}>{card.button}</button>
                        </Card>
                    ))}
                </Grid>
            </div>
            ) : null}
            {
                selectedCourseData.title && (
                    <CourseAdmin
                        course={selectedCourseData}
                        onClose={() => {
                            setSelectedCourseData({})
                            setSelectedTab('my-courses');
                        }}
                    />
                )
            }
        </div>
    );
}

export default Courses;