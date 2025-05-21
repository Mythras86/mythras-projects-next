import neonsnake from '@/public/images/snake.png';
import { StaticImageData } from 'next/image';

export interface IProjectData {
    id: string;
    name: string;
    type: string;
    status: string;
    img?: StaticImageData;
    imgSrc?: string;
    alt: string;
}

export const projectData: Array<IProjectData> = [
    {
        id: 'neonsnake',
        name: 'Neon Snake',
        type: 'Hobby poject',
        status: 'Finished',
        img: neonsnake,
        imgSrc: '@/public/images/snake.png',
        alt: 'snakeProject'
    },
    {
        id: 'shadowrun-in-hungary',
        name: 'ShadowRun in Hungary karakterlap',
        type: 'Hobby poject',
        status: 'In Progress',
        alt: ''
    },
]