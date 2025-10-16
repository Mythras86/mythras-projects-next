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
        atlagMagassag: 'Egy átlagos Ember Férfi magassága 180 cm, plusz-minusz az ambícióik.',
        atlagSuly: 'Egy átlagos Ember Férfi súlya 86 kg, plusz-minusz az utolsó hambi, amit bevágott.',
      },
      no: {
        atlagMagassag: 'Egy átlagos Ember Nő magassága 166 cm, plusz-minusz a platformcsizma talpa.',
        atlagSuly: 'Egy átlagos Ember Nő súlya 70 kg, plusz-minusz amennyivel a mérleg téved.',
      },
      semleges: {
        atlagMagassag: 'Egy átlagos Ember magassága 173 cm, plusz-minusz az, amit az élet a hátára pakolt.',
        atlagSuly: 'Egy átlagos Ember súlya 78 kg, plusz-minusz amennyivel a statisztikai hivatal elszámolta.',
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
        atlagMagassag: 'Egy átlagos Tünde Férfi magassága 186 cm, plusz-minusz az egója.',
        atlagSuly: 'Egy átlagos Tünde Férfi súlya 80 kg, plusz-minusz a rengeteg jópofizás olyanokkal, akiket nem is kedvel.',
      },
      no: {
        atlagMagassag: 'Egy átlagos Tünde Nő magassága 174 cm, plusz-minusz a tiarájának legmagasabb csúcsa',
        atlagSuly: 'Egy átlagos Tünde Nő súlya 66 kg, plusz-minusz az utolsó felhörpintett harmatcsepp.',
      },
      semleges: {
        atlagMagassag: 'Egy átlagos Tünde magassága 180 cm, plusz minusz a füleinek hossza',
        atlagSuly: 'Egy átlagos Tünde súlya 73 kg, plusz-minusz a rengeteg kence, amitől szép lesz.',
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
        atlagMagassag: 'Egy átlagos Törpe Férfi magassága 137 cm, plusz-minusz a szakálla befonva.',
        atlagSuly: 'Egy átlagos Törpe Férfi súlya 60 kg, plusz-minusz az utolsó hordó sör, amint elnyelt.',
      },
      no: {
        atlagMagassag: 'Egy átlagos Törpe Nő magassága 123 cm, plusz-minusz a megtörhetetelen vasakarata.',
        atlagSuly: 'Egy átlagos Törpe Nő súlya 48 kg, plusz-minusz amit bepakolt a hátizsákodba a tudtod nélkül.',
      },
      semleges: {
        atlagMagassag: 'Egy átlagos Törpe magassága 130 cm, plusz-minusz a csatabárdja megélezve.',
        atlagSuly: 'Egy átlagos Törpe súlya 54 kg, plusz-minusz az utolsó fél disznósült, amit eltakarított előled.',
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
        atlagMagassag: 'Egy átlagos Ork Férfi magassága 200 cm, plusz-minusz a kiálló agyarai.',
        atlagSuly: 'Egy átlagos Ork Férfi súlya 135 kg, plusz-minusz az utolsó zsák proteinszelet, amit edzés előtt betolt.',
      },
      no: {
        atlagMagassag: 'Egy átlagos Ork Nő magassága 180 cm, plusz-minusz amit levág a lábaidból, ha felbosszantod.',
        atlagSuly: 'Egy átlagos Ork Nő súlya 110 kg, plusz-minusz amit nem mersz megemlíteni neki, nehogy felbosszantsd.',
      },
      semleges: {
        atlagMagassag: 'Egy átlagos Ork magassága 190 cm, plusz-minusz az, amennyivel szélesebb nálad.',
        atlagSuly: 'Egy átlagos Ork súlya 125 kg, plusz-minusz az utolsó egész malac, amit betermelt méreckedés előtt.',
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
    ],
    nemek: {
      ferfi: {
        atlagMagassag: 'Egy átlagos Troll Férfi magassága 260 cm, plusz-minusz a nyakad reccsenése, ahogy felnézel a magasba.',
        atlagSuly: 'Egy átlagos Troll Férfi súlya 300 kg, plusz-minusz az utolsó megevett kretén, aki be mert szólni neki.',
      },
      no: {
        atlagMagassag: 'Egy átlagos Troll Nő magassága 240 cm, plusz-minusz amennyire szeretnél egy nagyon magas barátnőt.',
        atlagSuly: 'Egy átlagos Troll Nő súlya 260 kg, plusz-minusz amennyire félsz attól, hogy megkérdezd a pontos értéket.',
      },
      semleges: {
        atlagMagassag: 'Egy átlagos Troll magassága 250 cm, plusz-minusz amennyi még a mesekönyvben szerepel.',
        atlagSuly: 'Egy átlagos Troll súlya 280 kg, plusz-minusz híd súlya, persze csak ha dolgozik.',
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