export interface TulajdonsagModel {
  rovidites: string;
  nev: string;
  szint: number;
  min: number;
  max: number;
}

export interface TulajdonsagokModel {
  fizEro: TulajdonsagModel,
  fizUgy: TulajdonsagModel,
  fizGyo: TulajdonsagModel,
  fizAll: TulajdonsagModel,
  asztEro: TulajdonsagModel,
  asztUgy: TulajdonsagModel,
  asztGyo: TulajdonsagModel,
  asztAll: TulajdonsagModel,
  esszencia: TulajdonsagModel,
  magia: TulajdonsagModel,
  chi: TulajdonsagModel,
  kockatartalek: TulajdonsagModel,
}

export const TulajdonsagokData: TulajdonsagokModel = {
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
    kockatartalek: {rovidites: 'TART', nev: 'Kockatartalék', szint: 0, min: 0, max: 6},
}