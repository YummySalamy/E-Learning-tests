import React, { useState } from 'react';
import Card from '../../../components/Card';
import Grid from '../../../components/Grid';
import './assets/Content.css';

const Courses = () => {
    const [cards] = useState([
        {
            title: 'DataPath E-Learning',
            content: 'Estudiantes: 1042',
            button: 'Ver cursos',
            buttonAction: () => alert('Button 1 clicked')
        },
        {
            title: 'Material de apoyo',
            content: 'Descarga el material de apoyo de tus cursos',
            button: 'Acceder',
            buttonAction: () => alert('Button 2 clicked')
        },
        {
            title: 'Machine Learning 10',
            content: 'Estudiantes: 128',
            button: 'Ver cursos',
            buttonAction: () => alert('Button 3 clicked')
        },
        {
            title: 'Node.js 10',
            content: 'Estudiantes: 128',
            button: 'Ver cursos',
            buttonAction: () => alert('Button 4 clicked')
        },
        {
            title: 'MongoDB & Mongoose 10',
            content: 'Estudiantes: 128',
            button: 'Ver cursos',
            buttonAction: () => alert('Button 5 clicked')
        },
        {
            title: 'Aplicaciones web con React.js ',
            content: 'Estudiantes: 128',
            button: 'Ver cursos',
            buttonAction: () => alert('Button 6 clicked')
        },
    ]);

    return (
        <div className="courses">
            <Grid columns={3}>
                {cards.map((card, index) => (
                    <Card key={index} styles={{margin: '1rem'}}>
                        <h2>{card.title}</h2>
                        <p>{card.content}</p>
                        <button onClick={card.buttonAction}>{card.button}</button>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default Courses;