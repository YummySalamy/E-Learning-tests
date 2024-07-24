import AzureFundamentalsIcon from '../assets/icons/azure-fundamentals-icon.png';
import MongoDbIcon from '../assets/icons/mongodb-logo.png';
import NodeJsIcon from '../assets/icons/nodejs-logo.png';
import { FaReact } from "react-icons/fa";

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
        title: 'Azure Fundamentals',
        content: 'Estudiantes: 128',
        button: 'Ver curso',
        image: AzureFundamentalsIcon,
        cards: [
            {
                title: 'Fundamentos de Azure',
                date: 'ago.',
                status: 'Online',
                image: AzureFundamentalsIcon,
                description: [
                'Descripción de los conceptos de la nube',
                'Descripción de la arquitectura y los servicios de Azure',
                'Descripción de la administración y la gobernanza de Azure'
                ]
            },
            {
                title: 'Azure AI Fundamentals',
                date: 'sep.',
                status: 'Online',
                image: AzureFundamentalsIcon,
                description: [
                'Descripción de las cargas de trabajo y las consideraciones de inteligencia artificial.',
                'Describir los principios fundamentales del aprendizaje automático en Azure.',
                'Descripción de las características de visión artificial.'
                ]
            },
            {
                title: 'Azure AI Engineer',
                date: 'oct.',
                status: 'Online',
                image: AzureFundamentalsIcon,
                description: [
                    'Planeamiento y administración de una solución de Azure AI.',
                    'Implementación de soluciones de ayuda para la toma de decisiones.',
                    'Implementación de soluciones de visión artificial.'
                ]
            }
        ]   
    },
    {
        title: 'Node.js 10',
        content: 'Estudiantes: 128',
        button: 'Ver curso',
        image: NodeJsIcon,
        cards: [
            {
                title: 'Fundamentos de Node.js',
                date: 'ago.',
                status: 'Online',
                image: NodeJsIcon,
                description: [
                'Descripción de los conceptos de Node.js',
                'Descripción de la arquitectura y los servicios de Node.js',
                'Descripción de la administración y la gobernanza de Node.js'
                ]
            },
            {
                title: 'Node.js avanzado',
                date: 'sep.',
                status: 'Online',
                image: NodeJsIcon,
                description: [
                'Descripción de las cargas de trabajo y las consideraciones de Node.js.',
                'Describir los principios fundamentales del aprendizaje automático en Node.js.',
                'Descripción de las características de visión artificial.'
                ]
            },
            {
                title: 'Node.js para desarrolladores',
                date: 'oct.',
                status: 'Online',
                image: NodeJsIcon,
                description: [
                    'Planeamiento y administración de una solución de Node.js.',
                    'Implementación de soluciones de ayuda para la toma de decisiones.',
                    'Implementación de soluciones de visión artificial.'
                ]
            }
        ]
    },
    {
        title: 'MongoDB ',
        content: 'Estudiantes: 128',
        button: 'Ver curso',
        image: MongoDbIcon,
        cards: [
            {
                title: 'Fundamentos de MongoDB',
                date: 'ago.',
                status: 'Online',
                image: MongoDbIcon,
                description: [
                'Descripción de los conceptos de MongoDB',
                'Descripción de la arquitectura y los servicios de MongoDB',
                'Descripción de la administración y la gobernanza de MongoDB'
                ]
            },
            {
                title: 'MongoDB avanzado',
                date: 'sep.',
                status: 'Online',
                image: MongoDbIcon,
                description: [
                'Descripción de las cargas de trabajo y las consideraciones de MongoDB.',
                'Describir los principios fundamentales del aprendizaje automático en MongoDB.',
                'Descripción de las características de visión artificial.'
                ]
            },
            {
                title: 'MongoDB para desarrolladores',
                date: 'oct.',
                status: 'Online',
                image: MongoDbIcon,
                description: [
                    'Planeamiento y administración de una solución de MongoDB.',
                    'Implementación de soluciones de ayuda para la toma de decisiones.',
                    'Implementación de soluciones de visión artificial.'
                ]
            }
        ]
    },
    {
        title: 'Aplicaciones web con React.js ',
        content: 'Estudiantes: 128',
        button: 'Ver curso',
        // buttonAction: () => alert('Button 10 clicked'),
        image: AzureFundamentalsIcon,
        cards: [
            {
                title: 'Fundamentos de React.js',
                date: 'ago.',
                status: 'Online',
                image: AzureFundamentalsIcon,
                description: [
                'Descripción de los conceptos de React.js',
                'Descripción de la arquitectura y los servicios de React.js',
                'Descripción de la administración y la gobernanza de React.js'
                ]
            },
            {
                title: 'React.js avanzado',
                date: 'sep.',
                status: 'Online',
                image: AzureFundamentalsIcon,
                description: [
                'Descripción de las cargas de trabajo y las consideraciones de React.js.',
                'Describir los principios fundamentales del aprendizaje automático en React.js.',
                'Descripción de las características de visión artificial.'
                ]
            },
            {
                title: 'React.js para desarrolladores',
                date: 'oct.',
                status: 'Online',
                image: AzureFundamentalsIcon,
                description: [
                    'Planeamiento y administración de una solución de React.js.',
                    'Implementación de soluciones de ayuda para la toma de decisiones.',
                    'Implementación de soluciones de visión artificial.'
                ]
            }
        ]
    },
];

export { dummyMyCourses, dummyOtherCourses };