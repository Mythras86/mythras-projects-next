export const dnsData: Array<DnsModel> = [
  {
    dns: 'Ember',
    tulajndonsagMod: [
      {nev: 'kockatartalek', ertek: 2},
    ],
    atlagMagFerfi: 180,
    atlagMagNo: 166,
    atlagMag: 173,
    atlagSulyFerfi: 86,
    atlagSulyNo: 70,
    atlagSuly: 78,
    VarhatoEletkorFerfi: 65,
    VarhatoEletkorNo: 75,
    VarhatoEletkorMax: 110,
    kepessegek: [
      '+1 Kockatartalék'
    ],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Tünde',
    tulajndonsagMod: [
      {nev: 'fizUgy', ertek: 1},
      {nev: 'asztEro', ertek: 2},
      {nev: 'asztGyo', ertek: 1},
    ],
    atlagMagFerfi: 186,
    atlagMagNo: 174,
    atlagMag: 174,
    atlagSulyFerfi: 80,
    atlagSulyNo: 66,
    atlagSuly: 73,
    VarhatoEletkorFerfi: 75,
    VarhatoEletkorNo: 85,
    VarhatoEletkorMax: 150,
    kepessegek: [
      'Éjszakai látás'
    ],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Törpe',
    tulajndonsagMod: [
      {nev: 'fizEro', ertek: 2},
      {nev: 'fizAll', ertek: 1},
      {nev: 'fizGyo', ertek: -1},
      {nev: 'asztAll', ertek: 1},
    ],
    atlagMagFerfi: 137,
    atlagMagNo: 123,
    atlagMag: 130,
    atlagSulyFerfi: 60,
    atlagSulyNo: 48,
    atlagSuly: 54,
    VarhatoEletkorFerfi: 70,
    VarhatoEletkorNo: 80,
    VarhatoEletkorMax: 130,
    kepessegek: [
      '+2 Állóképesség Mérgezés ellen',
      'Hőlátás'
    ],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Ork',
    tulajndonsagMod: [
      {nev: 'fizEro', ertek: 2},
      {nev: 'fizAll', ertek: 2},
      {nev: 'asztEro', ertek: -1},
    ],

    atlagMagFerfi: 200,
    atlagMagNo: 180,
    atlagMag: 190,
    atlagSulyFerfi: 135,
    atlagSulyNo: 110,
    atlagSuly: 123,
    VarhatoEletkorFerfi: 55,
    VarhatoEletkorNo: 65,
    VarhatoEletkorMax: 90,
    kepessegek: [
      '+1 Fizikai Sérülés ellen',
      'Éjszakai látás'
    ],
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
  },
  {
    dns: 'Troll',
    tulajndonsagMod: [
      {nev: 'fizEro', ertek: 3},
      {nev: 'fizAll', ertek: 3},
      {nev: 'fizUgy', ertek: -1},
      {nev: 'asztEro', ertek: -1},
      {nev: 'pancel', ertek: 1},
    ],

    atlagMagFerfi: 260,
    atlagMagNo: 240,
    atlagMag: 250,
    atlagSulyFerfi: 300,
    atlagSulyNo: 240,
    atlagSuly: 270,
    VarhatoEletkorFerfi: 55,
    VarhatoEletkorNo: 65,
    VarhatoEletkorMax: 100,
    kepessegek: [
      '+2 Fizikai Sérülés ellen',
      'Hőlátás',
      '+1 Páncél'
    ],
    szorzoRuhazat: 1.5,
    szorzoEletvitel: 1.5,
  }
];

export interface DnsModel {
  dns: string,
  atlagMagFerfi: number,
  atlagMagNo: number,
  atlagMag: number,
  atlagSulyFerfi: number,
  atlagSulyNo: number,
  atlagSuly: number,
  VarhatoEletkorFerfi: number,
  VarhatoEletkorNo: number,
  VarhatoEletkorMax: number,

  tulajndonsagMod: Array<{nev: string, ertek: number}>

  kockatartalek?: number,
  kepessegek: Array<string>,

  szorzoRuhazat: number,
  szorzoEletvitel: number,
}