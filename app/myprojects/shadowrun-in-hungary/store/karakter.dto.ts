import { Types } from "mongoose";
import { EroforrasokDto } from "../karakterek/[karakterid]/components/Eroforrasok/store/eroforrasok.dto";
import { JellemzokDto } from "../karakterek/[karakterid]/components/Jellemzok/Jellemzo/store/jellemzok.dto";
import { OroksegDto } from "../karakterek/[karakterid]/components/Orokseg/store/orokseg.dto";
import { TulajdonsagokDto } from "../karakterek/[karakterid]/components/Tulajdonsagok/store/tulajdonsagok.dto";
export interface KarakterDto extends OroksegDto, JellemzokDto, TulajdonsagokDto, EroforrasokDto {
  _id?: Types.ObjectId;
  // Tulajdonos
  tulajdonosEmail: string;
  letrehozasDatum: string;
  
  // Karakter adatok
  partik: Array<any>;
  sztorik: Array<any>;
  eletutak: Array<any>;

  // Eszközök
  eszkozok: Array<any>
}