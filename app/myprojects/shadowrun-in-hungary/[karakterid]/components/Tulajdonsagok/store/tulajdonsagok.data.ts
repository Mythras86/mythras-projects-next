import { TulajdonsagokModel } from "./tulajdonsag.model";
import { AsztalisTulDto, FizikaiTulDto, SpecialisTulkDto } from "./tulajdonsagok.dto";


export const fizikaiData: TulajdonsagokModel<FizikaiTulDto> = {
  fizEro: {rovidites: 'ERO', nev: 'Erő', tipus: 'Fizikai', szint: 1, min: 1, max: 6},
  fizUgy: {rovidites: 'UGY', nev: 'Ügyesség', tipus: 'Fizikai', szint: 1, min: 1, max: 6},
  fizGyo: {rovidites: 'GYO', nev: 'Gyorsaság', tipus: 'Fizikai', szint: 1, min: 1, max: 6},
  fizAll: {rovidites: 'KIT', nev: 'Kitartás', tipus: 'Fizikai', szint: 1, min: 1, max: 6},
}

export const asztralisData: TulajdonsagokModel<AsztalisTulDto> = {
  asztEro: {rovidites: 'KAR', nev: 'Karizma', tipus: 'Asztrális', szint: 1, min: 1, max: 6},
  asztUgy: {rovidites: 'LOG', nev: 'Logika', tipus: 'Asztrális', szint: 1, min: 1, max: 6},
  asztGyo: {rovidites: 'INT', nev: 'Intuíció', tipus: 'Asztrális', szint: 1, min: 1, max: 6},
  asztAll: {rovidites: 'AKA', nev: 'Akaraterő', tipus: 'Asztrális', szint: 1, min: 1, max: 6},
}

export const specialisData: TulajdonsagokModel<SpecialisTulkDto> = {
  magia: {rovidites: 'MAG', nev: 'Mágia', tipus: 'Speciális', szint: 0, min: 0, max: 6},
  chi: {rovidites: 'CHI', nev: 'Chi áramlás', tipus: 'Speciális', szint: 0, min: 0, max: 6},
  rezonancia: {rovidites: 'REZ', nev: 'Rezonancia', tipus: 'Speciális', szint: 0, min: 0, max: 6},
  esszencia: {rovidites: 'ESS', nev: 'Esszencia', tipus: 'Speciális', szint: 6, min: 6, max: 6},
  kockatartalek: {rovidites: 'TART', nev: 'Kockatartalék', tipus: 'Fizikai', szint: 0, min: 0, max: 6},
}