import React, { useState } from 'react';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import CourseAdmin from './courses-misc/CourseAdmin';
import Grid from '../../../components/Grid';
import ProgressCircle from '../../../components/charts/ProgressCircle';
import Select from '../../../components/selectors/Select';
import Timeline from './courses-misc/Timeline';
import { IoIosAddCircleOutline } from "react-icons/io";
import { dummyMyCourses, dummyOtherCourses } from './courses-misc/DummyData';
import { AiOutlineRollback } from "react-icons/ai";
import './assets/Content.css';
import { FaRegClock } from 'react-icons/fa';

const Courses = () => {
    const [cards] = useState(dummyMyCourses);
    const [selectedTab, setSelectedTab] = useState('my-courses');
    const [selectedCourseData, setSelectedCourseData] = useState({});
    const [inspectNewCourse, setInspectNewCourse] = useState({});
    return (
        <div className="courses">
            { selectedTab &&
            <div>
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
                <div>
                    <Button
                        onClick={() => {
                            window.open('https://airtable.com/app13A0YN3t01fNjb/shrwcAy43j4R7tj7c');
                        }}
                        icon={<IoIosAddCircleOutline />}
                    >
                        Matricular Curso
                    </Button>
                </div>
            </div>
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
                            <img src={card.image} alt={card.title} style={{height: '50px', width: 'auto', border: '1px solid #ccc', borderRadius:'50%'}} />
                            <button 
                                onClick={() => {
                                    setInspectNewCourse(card);
                                    setSelectedTab(null);
                                }
                            }
                            >
                                {card.button}
                            </button>
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
            {
                inspectNewCourse.title && (
                    <div>
                        <div className="inspect-new-course">
                            <div className="inspect-new-course-header">
                                <h1>Cronograma</h1>
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
                                    <span style={{display: 'flex', fontSize: '1.2em', background: '#fff', padding: '10px', border: '1px solid #333', borderRadius: '50%'}}>
                                        <FaRegClock />
                                    </span>
                                    <p>Iniciamos el 19 de Agosto. 2024</p>
                                </div>
                            </div>
                            <Button
                                onClick={() => {
                                    setInspectNewCourse({});
                                    setSelectedTab('other-courses');
                                }}
                            >
                                <AiOutlineRollback />
                                Volver a cursos
                            </Button>
                        </div>
                        <Timeline
                            cards={inspectNewCourse.cards}
                            onClose={() => {
                                setInspectNewCourse({});
                                setSelectedTab('other-courses');
                            }}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default Courses;