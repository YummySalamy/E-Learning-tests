import React, { useEffect, useState } from 'react';
import Grid from '../../../../../components/Grid';
import Card from '../../../../../components/Card';

import YoutubeIcon from '../../../../../assets/youtube-svgrepo-com.svg';
import '../assets/ExtraHelpers.css';

const dummyEvents = [
    {
        video_url: 'https://www.youtube.com/embed/C24DMT-OEME?si=Fo34baobIkpJ0eTP',
    },
    {
        video_url: 'https://www.youtube.com/embed/khtvE5gnaPk?si=oHLrxsOU5gOYFJpO',
    },
    {
        video_url: 'https://www.youtube.com/embed/d6Fzz3tku6I?si=MK4n7G5rNNdFjmbS',
    },
]

const dummyUpcomingEvents = [
    {
        title: "Creando modelos de Machine Learning con Python",
        video_url: 'https://www.youtube.com/embed/wzVS6ZwQHJs?si=3TiB--0otcabgkOn',
    },
    {
        title: "Introducción a la programación en Python",
        video_url: 'https://www.youtube.com/embed/5r93XpQ2kJQ?si=pHjKn73DqGAaP8gV',
    },
    {
        title: "UI/UX Design",
        video_url: 'https://www.youtube.com/embed/7e90gBu4pas?si=3TiB--0otcabgkOn',
    },
]

const MonthPreview = () => {
    const [events, setEvents] = useState(dummyEvents);
    const [upcomingEvents, setUpcomingEvents] = useState(dummyUpcomingEvents);

    useEffect(() => {
        setEvents(dummyEvents);
        setUpcomingEvents(dummyUpcomingEvents);
    }, []);

    return (
        <div className="events">
            <p>Destacados del mes</p>
            <Grid columns={3}>
                {upcomingEvents.map((event, index) => (
                    <Card>
                        <div className="favorite-course">
                            <h3>{event.title}</h3>
                            <div className="card-embedded-video">
                            <iframe
                                src={event.video_url}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                            </div>
                        </div>
                    </Card>
                ))}
                <Card styles={{ background: '#333', color: '#fff', }}>
                    <div className='upcoming-events-info'>
                        <p>
                            Accede a todas las presentaciones y eventos de este mes en nuestro canal de YouTube.
                        </p>
                        <button 
                            style={{display: 'flex', alignItems: 'center', gap: '5px'}}
                            onClick={() => {
                                open('https://www.youtube.com/@datapathformation/videos');
                            }}
                        >
                            <img style={{width: '20px'}} src={YoutubeIcon} alt="youtube-icon" />
                            Ver todos los eventos
                        </button>
                    </div>
                    
                </Card>
            </Grid>
        </div>
    );
}

export default MonthPreview;