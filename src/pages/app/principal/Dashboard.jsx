import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import Grid from '../../../components/Grid';
import ProgressCircle from '../../../components/charts/ProgressCircle';
import ProgressBar from '../../../components/charts/ProgressBar';

import './assets/Principal.css';

const dummyLastCourse = {
    title: 'Digital Marketing',
    content: 'Profesor: John Doe',
    progress: '50',
    button: 'Continuar',
}


const Dashboard = () => {

    return (
        <div className="dashboard">
            {/* <Select 
                // label="Filtrar por"
                options={[
                    {label: 'Cursos completados', value: 'completed'},
                    {label: 'Cursos en progreso', value: 'in-progress'},
                    {label: 'Cursos pendientes', value: 'pending'}
                ]}
                value="completed"
                onChange={(value) => {
                    console.log('selected:', value);
                }}
            /> */}
            <div className="progress-container">
                <h2>Actividad Reciente</h2>
                <Grid columns={2}>
                    <Card styles={{ gap: '0'}}>
                        {dummyLastCourse.title && (
                            <>
                                <h3>{dummyLastCourse.title}</h3>
                                <ProgressCircle progress={dummyLastCourse.progress} />
                                <p>{dummyLastCourse.content}</p>
                                <Link to='/app/courses'>
                                    <button>
                                    {dummyLastCourse.button}
                                    </button>
                                </Link>
                                
                            </>
                        )}
                    </Card>
                    <Card 
                        styles={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0', 
                            background: '#333',
                            color: '#fff',
                        }}>
                        <p>
                            En este espacio se mostrará el progreso del último curso en el que estuviste inscrito.
                        </p>
                    </Card>
                </Grid>
            </div>
            <section className='learning-route'>
                <h2>Progreso de aprendizaje</h2>
                <Grid columns={3}>
                    <Card>
                        <h3>Envío de asignaciones</h3>
                        <ProgressBar progress="72" showPercentage={true} />
                    </Card>
                    <Card>
                        <h3>Participación en foros</h3>
                        <ProgressBar progress="50" showPercentage={true} />
                    </Card>
                    <Card>
                        <h3>Calificación de cursos</h3>
                        <ProgressBar progress="90" showPercentage={true} />
                    </Card>
                </Grid>
            </section>
        </div>
    );
}

export default Dashboard;