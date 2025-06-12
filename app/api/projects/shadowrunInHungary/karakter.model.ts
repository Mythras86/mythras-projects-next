export interface IKarakter {

  // Tulajdonos
  tulajdonosEamil: string,

  // Karakter adatok
  partik: Array<any>,
  sztorik: Array<any>,
  eletutak: Array<any>,
  verzio: number,

  // Örökség
  orokseg: {
    szuletesiNev: string,
    szuletesiNem: string,
    szuletesiDatum: string,
    dns: string,
    anyanyelv: string,
    kepessegek: Array<string>,
  }

  // Jellemzők
  jellemzok: {
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
  }  

  //Erőforrások
  eroforrasok: {
    karmaAlap:number,
    karmaKapott:number,
    karmaFelhasznalt:number,
    tokeAlap:number,
    tokeKapott:number,
    tokeFelhasznalt:number,
    atvaltas: number
  }

  // Tulajdonságok
  tulajdonsagok: {
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
}
