export interface TulajdonsagModel {
  rovidites: string;
  nev: string;
  tipus: string;
  szint: number;
  min: number;
  max: number;
}

export type TulajdonsagokModel<TulajdonsagokDto> = {
  [key in keyof TulajdonsagokDto]: TulajdonsagModel;
};