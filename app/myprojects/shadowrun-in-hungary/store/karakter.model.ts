export interface IKarakter {

  // Tulajdonos
  tulajdonosEmail: string,
  letrehozasEv: number,
  letrehozasHonap: number,
  letrehozasNap: number,

  // Karakter adatok
  partik: Array<any>,
  sztorik: Array<any>,
  eletutak: Array<any>,
  verzio: number,

  // Örökség
  szuletesiNev: string,
  szuletesiNem: string,
  szuletesiEv: number,
  szuletesiHonap: number,
  szuletesiNap: number,
  dns: string,
  anyanyelv: string,
  kepessegek: Array<string>,

  // Jellemzők
  becenev:string,
  alnev:string,
  testalkat:string,
  hajstilus:string,
  szakall:string,
  latszolagosNem: string,
  magassag:number,
  testsuly:number,
  szemszin:string,
  hajszin:string,
  szorszin:string,
  borszin:string,
  felelem:string,
  osztonzo:string,
  gyulolet:string,
  kedvenc:string,
  irtozat:string,
  vonzalom:string,

  //Erőforrások
  karmaAlap:number,
  karmaKapott:number,
  karmaFelhasznalt:number,
  tokeAlap:number,
  tokeKapott:number,
  tokeFelhasznalt:number,
  atvaltas: number

  // Tulajdonságok
  //fizikai
  fizEro: number,
  fizGyo: number,
  fizUgy: number,
  fizAll: number,
  //szellemi
  asztEro: number,
  asztGyo: number,
  asztUgy: number,
  asztAll: number,
  //speciális
  esszencia: number,
  magia: number,
  chi: number,
  kockatartalek: number,

  // Eszközök
  eszkozok: Array<any>
}