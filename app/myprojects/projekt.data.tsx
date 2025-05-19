export interface IProjectData {
    id: string;
    name: string;
    type: string;
    status: string;
    img: string;
    alt: string;
}

export const projectData: Array<IProjectData> = [
    {
        id: 'neonsnake',
        name: 'Neon Snake',
        type: 'Hobby poject',
        status: 'Finished',
        img: '@/public/images/snake.png',
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