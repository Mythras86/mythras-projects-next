import { TulajdonsagokDto } from "../../Tulajdonsagok/store/tulajdonsagok.dto"

export interface DnsModel {
  key: string;
  szoveg: string;
  tulMod: Array<{key: keyof TulajdonsagokDto; ertek: number}>
  nemek: {
    ferfi: {
      atlagMagassag: number;
      atlagSuly: number;
      varhatoEletkor: number;
    };
    no: {
      atlagMagassag: number;
      atlagSuly: number;
      varhatoEletkor: number;
    };
    semleges: {
      atlagMagassag: number;
      atlagSuly: number;
      varhatoEletkor: number;
    };
  };
  szorzoRuhazat: number;
  szorzoEletvitel: number;
  szemszin: Array<string>;
  borszin: Array<string>;
  hajszin: Array<string>;
  kepessegek: Array<string>;
}