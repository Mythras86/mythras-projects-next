import { Types } from "mongoose";
import { EroforrasokDto } from "../karakterek/[karakterid]/components/Eroforrasok/store/eroforrasok.dto";
import { IdentitasDto } from "../karakterek/[karakterid]/components/Jellemzok/store/jellemzok.identitas.dto";
import { OroksegDto } from "../karakterek/[karakterid]/components/Jellemzok/store/jellemzok.orokseg.dto";
import { TulajdonsagokDto } from "../karakterek/[karakterid]/components/Tulajdonsagok/store/tulajdonsagok.dto";
import { PszicheDto } from "../karakterek/[karakterid]/components/Jellemzok/store/jellemzok.psziche.dto";
import { AllapotjelzoDto } from "../karakterek/[karakterid]/components/Allapotjelzo/store/allapotjelzo.dto";
export interface KarakterDto extends OroksegDto, IdentitasDto, PszicheDto, TulajdonsagokDto, AllapotjelzoDto, EroforrasokDto {
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