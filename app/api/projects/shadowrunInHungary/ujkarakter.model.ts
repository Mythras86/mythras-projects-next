export interface IKarakter {
  // Karakter adatok
  _id: string;
  tulajdonosId: string;
  tulajdonosNev: string;
  partik: [];
  sztorik: [];
  eletutak: [];
  verzio: number;

  // Születési jellemzők
  szuletesiNev: string,
  szuletesiNem: string,
  szuletesiDatum: string,
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
  eletkor:number,
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
  tokeAlap:number,
  tokeKapott:number,

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
}
