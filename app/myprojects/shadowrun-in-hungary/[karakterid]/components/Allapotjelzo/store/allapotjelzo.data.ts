import { AllapotjelzoDto } from "./allapotjelzo.dto";

export interface AllapotModel {
    fejlec: string;
    alapertek: string;
    vegertek: string;
    target: keyof AllapotjelzoDto;
}

export const astralisAllapot: AllapotModel = {
    fejlec: "Asztrális állapot",
    alapertek: "Felfrissült",
    vegertek: 'Eszméletlen',
    target: 'asztralisAllapot'
}

export const fizikaiAllapot: AllapotModel = {
    fejlec: "Fizikai állapot",
    alapertek: "Gyógyult",
    vegertek: 'Halott',
    target: 'fizikaiAllapot'
}