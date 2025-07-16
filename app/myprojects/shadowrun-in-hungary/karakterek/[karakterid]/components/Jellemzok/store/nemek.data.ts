import { TulajdonsagokDto } from "../../Tulajdonsagok/store/tulajdonsagok.dto";

interface nemModel {
    key: string;
    szoveg: string;
    tulMod?: Array<{key: keyof TulajdonsagokDto, ertek: number}>;
}

export const nemekData: Array<nemModel> = [
    {
        key: 'ferfi',
        szoveg: 'Férfi',
        tulMod: [
            {key: 'fizEro', ertek: 1},
            {key: 'asztUgy', ertek: 1},
            {key: 'asztEro', ertek: -1},
            {key: 'asztAll', ertek: -1},
        ]
    },
    {
        key: 'no',
        szoveg: 'Nő',
        tulMod: [
            {key: 'fizEro', ertek: -1},
            {key: 'fizAll', ertek: -1},
            {key: 'asztGyo', ertek: 1},
            {key: 'asztAll', ertek: 1},
        ]
        
    },
    {
        key: 'semleges',
        szoveg: 'Semleges',
    }
    
]