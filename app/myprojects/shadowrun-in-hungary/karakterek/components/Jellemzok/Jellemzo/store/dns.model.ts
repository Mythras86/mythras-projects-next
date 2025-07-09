import { TulajdonsagokDto } from "../../../Tulajdonsagok/store/tulajdonsagok.dto"

export interface DnsModel {
  [key: string]: {
    szoveg: string,
    nemek: {
      ferfi: {
        atlagMagassag: number,
        atlagSuly: number,
        varhatoEletkor: number,
        tulMod: Array<{key: keyof TulajdonsagokDto, ertek: number}>
      }
      no: {
        atlagMagassag: number,
        atlagSuly: number,
        varhatoEletkor: number,
        tulMod: Array<{key: keyof TulajdonsagokDto, ertek: number}>
      }
    },
    szorzoRuhazat: number,
    szorzoEletvitel: number,
    kepessegek: Array<string>
  }
}