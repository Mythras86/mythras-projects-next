import { TulajdonsagokDto } from "../../../Tulajdonsagok/store/tulajdonsagok.dto";

export interface nemDto {
    key: string;
    szoveg: string;
    tulMod?: Array<{key: keyof TulajdonsagokDto, ertek: number}>;
}