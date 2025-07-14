import { TulajdonsagModel } from "./tulajdonsag.model";
import { TulajdonsagokDto } from "./tulajdonsagok.dto";


type TulajdonsagokModel<TulajdonsagokDto> = {
  [key in keyof TulajdonsagokDto]: TulajdonsagModel;
};

export const TulajdonsagokData: TulajdonsagokModel<TulajdonsagokDto> = {
  fizEro: {rovidites: 'ERO', nev: 'Erő', szint: 1, min: 1, max: 6},
  fizUgy: {rovidites: 'UGY', nev: 'Ügyesség', szint: 1, min: 1, max: 6},
  fizGyo: {rovidites: 'GYO', nev: 'Gyorsaság', szint: 1, min: 1, max: 6},
  fizAll: {rovidites: 'KIT', nev: 'Kitartás', szint: 1, min: 1, max: 6},
  asztEro: {rovidites: 'KAR', nev: 'Karizma', szint: 1, min: 1, max: 6},
  asztUgy: {rovidites: 'LOG', nev: 'Logika', szint: 1, min: 1, max: 6},
  asztGyo: {rovidites: 'INT', nev: 'Intuíció', szint: 1, min: 1, max: 6},
  asztAll: {rovidites: 'AKA', nev: 'Akaraterő', szint: 1, min: 1, max: 6},
  esszencia: {rovidites: 'ESS', nev: 'Esszencia', szint: 6, min: 0, max: 6},
  magia: {rovidites: 'MAG', nev: 'Mágia', szint: 0, min: 0, max: 6},
  chi: {rovidites: 'CHI', nev: 'Chi áramlás', szint: 0, min: 0, max: 6},
  rezonancia: {rovidites: 'REZ', nev: 'Rezonancia', szint: 0, min: 0, max: 6},
  pancel: {rovidites: 'PAN', nev: 'Páncél', szint: 0, min: 0, max: 0},
  kockatartalek: {rovidites: 'TART', nev: 'Kockatartalék', szint: 0, min: 0, max: 6},
}