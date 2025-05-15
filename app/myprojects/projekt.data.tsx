import neonSnake from '@/public/images/snake.png'
import { StaticImageData } from 'next/image';

interface IProjectData {
    id: string;
    name: string;
    type: string;
    status: string;
    img: StaticImageData | '';
    alt: string;
}

export const projectData: Array<IProjectData> = [
    {
        id: 'neonsnake',
        name: 'Neon Snake',
        type: 'Hobby poject',
        status: 'Finished',
        img: neonSnake,
        alt: 'snakeProject'
    },
    {
        id: 'shadowrun-in-hungary',
        name: 'ShadowRun in Hungary karakterlap',
        type: 'Hobby poject',
        status: 'In Progress',
        img: '',
        alt: ''
    },
]