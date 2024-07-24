import React from 'react';
import Grid from '../../../../../components/Grid';
import Card from '../../../../../components/Card';

const About = () => {
    return (
        <div className='about' style={{padding: '20px'}}>
            <Grid columns={2} gap={20}>
            <Card styles={{padding: '20px', background: '#333', color: '#fff'}}>
                <h1>¿Qué es Datapath Memberships?</h1>
                <p>
                    Datapath Memberships es una plataforma de membresías que te permite acceder a una serie de beneficios exclusivos en los eventos de Datapath. 
                    Con tu membresía, podrás acceder a eventos exclusivos, descuentos en eventos, y mucho más.
                </p>
            </Card>
            <Card styles={{padding: '20px'}}>
                <h1>¿Cómo puedo acceder a una membresía?</h1>
                <p>
                    Para acceder a una membresía, deberás registrarte en la plataforma de Datapath y dirigirte a la sección de membresías. 
                    Allí podrás ver las membresías disponibles y seleccionar la que más se ajuste a tus necesidades.
                </p>
            </Card>
            </Grid>
        </div>
    )
}

export default About;