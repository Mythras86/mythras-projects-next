import { AllapotjelzoDto } from "./allapotjelzo.dto";

export interface AllapotModel {
    fejlec: string;
    alapertek: string;
    target: keyof AllapotjelzoDto;
}

export const astralisAllapot: AllapotModel = {
    fejlec: "Asztrális állapot",
    alapertek: "Felfrissült",
    target: 'asztralisAllapot'
}

export const fizikaiAllapot: AllapotModel = {
    fejlec: "Fizikai állapot",
    alapertek: "Gyógyult",
    target: 'fizikaiAllapot'
}

export const taplaltsagAllapot: AllapotModel = {
    fejlec: "Tápláltság állapot",
    alapertek: "Jóllakott",
    target: 'ehseg'
}

export const pihentsegAllapot: AllapotModel = {
    fejlec: "Pihentség állapot",
    alapertek: "Kipihent",
    target: 'faradtsag'
}