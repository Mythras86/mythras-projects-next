export interface JellemzoModel {
  szoveg: string,
  inputTipus: string,
  megjegyzesElo: string,
  megjegyzesUto?: string,
  ertek: string | number,
  egyseg?: string,
  lista?: Array<any>
}