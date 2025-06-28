import { JellemzokModel } from "../components/Jellemzok/Jellemzo/store/dataJellemzok";
import { OroksegModel } from "../components/Jellemzok/Jellemzo/store/dataOrokseg";

export interface KarakterDto {
  // Tulajdonos
  id?: string;
  tulajdonosEmail: string;
  letrehozasDatum: string;
  
  // Karakter adatok
  partik: Array<any>;
  sztorik: Array<any>;
  eletutak: Array<any>;

  orokseg: OroksegModel;
  jellemzok: JellemzokModel;

  //Erőforrások
  karmaAlap:number;
  karmaKapott:number;
  karmaFelhasznalt:number;
  tokeAlap:number;
  tokeKapott:number;
  tokeFelhasznalt:number;
  atvaltas: number

  // Tulajdonságok
  tulajdonsagok: {
    //fizikai
    fizEro: number;
    fizGyo: number;
    fizUgy: number;
    fizAll: number;
    //szellemi
    asztEro: number;
    asztGyo: number;
    asztUgy: number;
    asztAll: number;
    //speciális
    esszencia: number;
    magia: number;
    chi: number;
    kockatartalek: number;
  };

  // Eszközök
  eszkozok: Array<any>
}