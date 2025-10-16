import { Types } from "mongoose";
import { AllapotjelzoDto } from "../[karakterid]/components/Allapotjelzo/store/allapotjelzo.dto";
import { EroforrasokDto } from "../[karakterid]/components/Eroforrasok/store/eroforrasok.dto";
import { IdentitasDto } from "../[karakterid]/components/Jellemzok/store/jellemzok.identitas.dto";
import { OroksegDto } from "../[karakterid]/components/Jellemzok/store/jellemzok.orokseg.dto";
import { PszicheDto } from "../[karakterid]/components/Jellemzok/store/jellemzok.psziche.dto";
import { TulajdonsagokDto } from "../[karakterid]/components/Tulajdonsagok/store/tulajdonsagok.dto";
export interface KarakterDto extends OroksegDto, IdentitasDto, PszicheDto, TulajdonsagokDto, AllapotjelzoDto, EroforrasokDto {
  _id?: Types.ObjectId;
  // Tulajdonos
  tulajdonosEmail: string;
  letrehozasDatum: string;
  kijelzettnev: string;
  
  // Karakter adatok
  partik: Array<any>;
  sztorik: Array<any>;
  eletutak: Array<any>;

  // Eszközök
  eszkozok: Array<any>
}