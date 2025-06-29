import { Types } from "mongoose";
import { JellemzokDto } from "../components/Jellemzok/Jellemzo/store/dataJellemzok";
import { OroksegDto } from "../components/Jellemzok/Jellemzo/store/dataOrokseg";
import { TulajdonsagokDto } from "../components/Tulajdonsagok/store/tulajdonsagokData";

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