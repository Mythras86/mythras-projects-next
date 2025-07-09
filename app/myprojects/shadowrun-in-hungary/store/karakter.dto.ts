import { Types } from "mongoose";
import { JellemzokDto } from "../karakterek/components/Jellemzok/Jellemzo/store/jellemzok.dto";
import { OroksegDto } from "../karakterek/components/Orokseg/store/orokseg.dto";
import { TulajdonsagokDto } from "../karakterek/components/Tulajdonsagok/store/tulajdonsagok.dto";

export interface KarakterDto {
  _id?: Types.ObjectId;
  // Tulajdonos
  tulajdonosEmail: string;
  letrehozasDatum: string;
  
  // Karakter adatok
  partik: Array<any>;
  sztorik: Array<any>;
  eletutak: Array<any>;

  orokseg: OroksegDto;
  jellemzok: JellemzokDto;
  tulajdonsagok: TulajdonsagokDto;

  //Erőforrások
  karmaAlap:number;
  karmaKapott:number;
  karmaFelhasznalt:number;
  tokeAlap:number;
  tokeKapott:number;
  tokeFelhasznalt:number;
  atvaltas: number

  // Eszközök
  eszkozok: Array<any>
}