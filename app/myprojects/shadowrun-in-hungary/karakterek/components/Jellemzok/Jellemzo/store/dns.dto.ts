import { TulajdonsagokDto } from "../../../Tulajdonsagok/store/tulajdonsagok.dto"

export interface dnsDto {
  szoveg: string;
  tulMod: Array<{key: keyof TulajdonsagokDto; ertek: number}>;
  atlagMagassag: number;
  atlagSuly: number;
  varhatoEletkor: number;
  szorzoRuhazat: number;
  szorzoEletvitel: number;
  kepessegek: Array<string>
}