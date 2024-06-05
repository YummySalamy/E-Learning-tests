import React, { useEffect, useState } from 'react';
import Grid from '../../../components/Grid';
import Card from './assets/CustomEventCard';

import YoutubeIcon from '../../../assets/youtube-svgrepo-com.svg';
import './assets/Extra.css';

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
        video_url: 'https://www.youtube.com/embed/wzVS6ZwQHJs?si=3TiB--0otcabgkOn',
    },
    // {
    //     video_url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
    // },
    // {
    //     video_url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
    // },
]

const Events = () => {
    const [events, setEvents] = useState(dummyEvents);
    const [upcomingEvents, setUpcomingEvents] = useState(dummyUpcomingEvents);

    useEffect(() => {
        setEvents(dummyEvents);
        setUpcomingEvents(dummyUpcomingEvents);
    }, []);

    return (
        <div className="events">
            <p>Próximos eventos</p>
            <Grid columns={3}>
                {upcomingEvents.map((event, index) => (
                    <Card>
                        <div className="card-embedded-video">
                        <iframe 
                            src={event.video_url}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        ></iframe>
                        </div>
                    </Card>
                ))}
                <Card styles={{ background: '#333', color: '#fff', }}>
                    <div className='upcoming-events-info'>
                        <p>
                            En este espacio se mostrarán los próximos eventos a los que podrás asistir.
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
            <p>Eventos pasados</p>
            <Grid>
                {events.map((event, index) => (
                    <Card>
                        <div className="card-embedded-video">
                            <iframe
                                title="video"
                                src={event.video_url}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Card>
                ))}
            </Grid>
        </div>
    );
}

export default Events;