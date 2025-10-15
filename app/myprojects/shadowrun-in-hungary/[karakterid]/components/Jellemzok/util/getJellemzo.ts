import { IJellemzo } from "../Jellemzo/Jellemzo";
import { JellemzoModel } from "../store/jellemzo.model";

export function getJellemzo(key: string, adat: JellemzoModel, ertek: any): IJellemzo {
    return {key, adat, ertek}
}