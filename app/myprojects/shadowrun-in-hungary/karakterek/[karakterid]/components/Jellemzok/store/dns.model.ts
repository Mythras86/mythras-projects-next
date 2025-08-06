import { TulajdonsagokDto } from "../../Tulajdonsagok/store/tulajdonsagok.dto"

export interface DnsModel {
  key: string;
  szoveg: string;
  tulMod: Array<{key: keyof TulajdonsagokDto; ertek: number}>
  nemek: {
    ferfi: {
      atlagMagassag: string;
      atlagSuly: string;
    };
    no: {
      atlagMagassag: string;
      atlagSuly: string;
    };
    semleges: {
      atlagMagassag: string;
      atlagSuly: string;
    };
  };
  szorzoRuhazat: number;
  szorzoEletvitel: number;
  szemszin: Array<string>;
  borszin: Array<string>;
  hajszin: Array<string>;
  szorszin: Array<string>;
  kepessegek: Array<string>;
}