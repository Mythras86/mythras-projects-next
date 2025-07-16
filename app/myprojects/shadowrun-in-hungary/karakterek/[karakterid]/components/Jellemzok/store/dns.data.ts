import { DnsModel } from "./dns.model"

const szorzetSzinek = [
  '#343434',
  '#583322',
  '#7f4432',
  '#714721',
  '#D3B27F',
  '#E4C795',
  '#FFEBC2',
]

const emberBorSzinek = [
  '#ffe2c9',
  '#ffd6c5',
  '#e7cbb5',
  '#e6c8b0',
  '#e4bdad',
  '#e7c1b2',
  '#ffcba3',
  '#e8b894',
  '#e7b38d',
  '#d8905f',
  '#c28155',
  '#be794a',
  '#88513a',
  '#7b4934',
  '#733e26'
]

const greenSkinBorSzinek = [
  '#e2ffe0',
  '#189625',
  '#43b832',
  '#67b832',
  '#addb40',
  '#e8e815',
  '#734e27',
  '#402e1b',
  '#302f2e',
]

const emberSzemSzinek = [
  '#634e34',
  '#8f5b31',
  '#2e536f',
  '#81b1ce',
  '#3d671d',
  '#1c7847',
  '#eee8aa',
  '#a8b461',
  '#989696',
  '#542a0e',
  '#e6ab37'
]

const greenSkinSzemSzinek = [
  '#634e34',
  '#8f5b31',
  '#3d671d',
  '#1c7847',
  '#eee8aa',
  '#a8b461',
  '#989696',
  '#542a0e',
  '#e6ab37',
  '#fa0905'
]

export const dnsData: Array<DnsModel> = [
  {
    key: 'ember', 
    szoveg: 'Ember',
    tulMod: [
      {key: 'kockatartalek', ertek: 2},
    ],
    nemek: {
      ferfi: {
        atlagMagassag: 180,
        atlagSuly: 86,
        varhatoEletkor: 65,
      },
      no: {
        atlagMagassag: 166,
        atlagSuly: 70,
        varhatoEletkor: 75,
      },
      semleges: {
        atlagMagassag: 173,
        atlagSuly: 78,
        varhatoEletkor: 70,
      }
    },
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
    kepessegek: [],
    szemszin: emberSzemSzinek,
    borszin: emberBorSzinek,
    hajszin: szorzetSzinek,
    szorszin: szorzetSzinek
  },
  {
    key: 'tunde',
    szoveg: 'Tünde',
    tulMod: [
      { key: 'fizUgy', ertek: 1 },
      { key: 'asztEro', ertek: 2 },
    ],
    nemek: {
      ferfi: {
        atlagMagassag: 186,
        atlagSuly: 80,
        varhatoEletkor: 75,
      },
      no: {
        atlagMagassag: 174,
        atlagSuly: 66,
        varhatoEletkor: 85,
      },
      semleges: {
        atlagMagassag: 180,
        atlagSuly: 73,
        varhatoEletkor: 80,
      }
    },
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
    kepessegek: [
      'Éjszakai látás'
    ],
    szemszin: emberSzemSzinek,
    borszin: emberBorSzinek,
    hajszin: szorzetSzinek,
    szorszin: szorzetSzinek

  },
  {
    key: 'torpe',
    szoveg: 'Törpe',
    tulMod: [
      { key: 'fizEro', ertek: 2 },
      { key: 'fizGyo', ertek: -1 },
      { key: 'asztAll', ertek: 1 },
    ],
    nemek: {
      ferfi: {
        atlagMagassag: 137,
        atlagSuly: 60,
        varhatoEletkor: 70,
      },
      no: {
        atlagMagassag: 123,
        atlagSuly: 48,
        varhatoEletkor: 80,
      },
      semleges: {
        atlagMagassag: 130,
        atlagSuly: 54,
        varhatoEletkor: 75,
      }
    },
    szorzoRuhazat: 0,
    szorzoEletvitel: 0,
    kepessegek: [
      '+2 Állóképesség Mérgezés ellen',
      'Hőlátás'
    ],
    szemszin: emberSzemSzinek,
    borszin: emberBorSzinek,
    hajszin: szorzetSzinek,
    szorszin: szorzetSzinek

  },
  {
    key: 'ork',
    szoveg: 'Ork',
    tulMod: [
      { key: 'fizEro', ertek: 2 },
      { key: 'fizAll', ertek: 2 },
      { key: 'asztEro', ertek: -1 },
    ],
    nemek: {
      ferfi: {
        atlagMagassag: 200,
        atlagSuly: 135,
        varhatoEletkor: 55,
      },
      no: {
        atlagMagassag: 180,
        atlagSuly: 110,
        varhatoEletkor: 65,
      },
      semleges: {
        atlagMagassag: 180,
        atlagSuly: 73,
        varhatoEletkor: 80,
      }
    },
    szorzoRuhazat: 1,
    szorzoEletvitel: 1,
    kepessegek: [
      '+1 Fizikai Sérülés ellen',
      'Éjszakai látás'
    ],
    szemszin: greenSkinSzemSzinek,
    borszin: greenSkinBorSzinek,
    hajszin: szorzetSzinek,
    szorszin: szorzetSzinek

  },
  {
    key: 'troll',
    szoveg: 'Troll',
    tulMod: [
      { key: 'fizEro', ertek: 3 },
      { key: 'fizUgy', ertek: -1 },
      { key: 'fizAll', ertek: 3 },
      { key: 'asztEro', ertek: -1 },
      { key: 'pancel', ertek: 1 },
    ],
    nemek: {
      ferfi: {
        atlagMagassag: 260,
        atlagSuly: 300,
        varhatoEletkor: 55,
      },
      no: {
        atlagMagassag: 240,
        atlagSuly: 240,
        varhatoEletkor: 65,
      },
      semleges: {
        atlagMagassag: 180,
        atlagSuly: 73,
        varhatoEletkor: 80,
      }
    },
    szorzoRuhazat: 1.5,
    szorzoEletvitel: 1.5,
    kepessegek: [
      '+2 Fizikai Sérülés ellen',
      'Hőlátás',
      '+1 Páncél'
    ],
    szemszin: greenSkinSzemSzinek,
    borszin: greenSkinBorSzinek,
    hajszin: szorzetSzinek,
    szorszin: szorzetSzinek
  }
]