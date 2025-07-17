export type JellemzokModel<T> = {
  [key in keyof T]: JellemzoModel;
};

export interface JellemzoModel {
  szoveg: string,
  inputTipus: string,
  megjegyzesElo: string,
  megjegyzesUto?: string,
  ertek: any,
  egyseg?: string,
  lista?: Array<any>
}