import { INPTIPUS } from "../components/Jellemzok/Jellemzo/Jellemzo";
import { dnsData } from "./dataDns";

export interface IJellemzok {
  nev: string,
  tipus: string,
  key: string,
  inputTipus: string,
  megjegyzes: string,
  ertek?: string | number,
  egyseg?: string,
  lista?: Array<any>
}

const dnsLista = dnsData.map(x=>x.dns);

export const jellemzokData: Array<IJellemzok> = [
  // örökség
    {
    nev: 'DNS',
    tipus: 'orokseg',
    key:'dns',
    megjegyzes:'Nem faj! Legfeljebb fajta te rasszista állat!',
    inputTipus: INPTIPUS.list,
    lista: dnsLista
  },
  {
    nev: 'Születési nem',
    tipus: 'orokseg',
    key:'szuletesiNem',
    megjegyzes:'Nem? De! Vagy mit tudom én!?',
    inputTipus: INPTIPUS.text,
    lista: [
      'Nő',
      'Férfi',
      'Mindkettő',
      'Egyik sem'
    ]
  },
  {
    nev: 'Születési dátum',
    tipus: 'orokseg',
    key:'szuletesiDatum',
    megjegyzes: 'Amikor megérkeztél ebbe a csodálatos sárgödörbe!',
    inputTipus: INPTIPUS.date,
  },
  {
    nev: 'Születési név',
    tipus: 'orokseg',
    key:'szuletesiNev',
    megjegyzes: 'Amit a sírodra vésnek, ha kisimultak az intenzív vonalaid...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Anyanyelv',
    tipus: 'orokseg',
    key:'anyanyelv',
    megjegyzes:'Kezdj el csicseregni, de ha kitolod, levágjuk...',
    inputTipus: INPTIPUS.text,
    lista: [
      'Magyar',
      'Angol',
      'Francia',
      'Orosz',
      'Japán',
      'Kínai',
      'Indiai'
    ]
  },
//jellemzők
  {
    nev: 'Aktuális dátum',
    tipus: 'jellemzo',
    key:'aktualisDatum',
    megjegyzes: 'Szerinted a jelenlegi életviteleddel meddig jutsz?',
    inputTipus: INPTIPUS.date,
  },
  {
    nev: 'Becenév/nevek',
    tipus: 'jellemzo',
    key:'becenev',
    megjegyzes: 'Ahogy a haverok ismernek, már ha még élnek...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Álnév/nevek',
    tipus: 'jellemzo',
    key:'alnev',
    megjegyzes: 'Az alvilágban jobb, ha csak ezt ismerik...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Testsúly',
    tipus: 'jellemzo',
    key:'testsuly',
    megjegyzes: 'Szerinted lecsontozva mennyit ér a húsod?',
    inputTipus: INPTIPUS.number,
    egyseg: ' kg'
  },
  {
    nev: 'Magasság',
    tipus: 'jellemzo',
    key:'magassag',
    megjegyzes: 'Ettől függ, hogy hokedlinek, vagy toronynak becéznek.',
    inputTipus: INPTIPUS.number,
    egyseg: ' cm'
  },
  {
    nev: 'Kedvenc szín',
    tipus: 'jellemzo',
    key:'kedvencszin',
    megjegyzes: 'Mi a kedvenc színed? Barna? Nem, a kékááá...',
    inputTipus: INPTIPUS.color,
  },
  {
    nev: 'Testalkat',
    tipus: 'jellemzo',
    key:'testalkat',
    megjegyzes: 'Ki a mellet, be a hasat, hadd mártom meg benned a vasat!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Bőrszín',
    tipus: 'jellemzo',
    key:'borszin',
    megjegyzes: 'Hidd el, lassan már senkit nem érdekel, kivéve ha ember vagy.',
    inputTipus: INPTIPUS.color,
    lista: [
      'ffd6c5',
      'ffe2c9',
      'ffcba3',
      'd8905f',
      '88513a',
      'e7c1b2',
      'e7cbb5',
      'e8b894',
      'c28155',
      '7b4934',
      'e4bdad',
      'e6c8b0',
      'e7b38d',
      'be794a',
      '733e26'
    ]
  },
  {
    nev: 'Szemszín',
    tipus: 'jellemzo',
    key:'szemszin',
    megjegyzes: 'Kék a szeme, arca csupa derű...',
    inputTipus: INPTIPUS.color,
    lista: []
  },
  {
    nev: 'Hajszín',
    tipus: 'jellemzo',
    key:'hajszin',
    megjegyzes: 'Milyet szeretnél? Van egyáltalán saját hajad?',
    inputTipus: INPTIPUS.color,
    lista: []
  },
  {
    nev: 'Szőrzet szín',
    tipus: 'jellemzo',
    key:'szorszin',
    megjegyzes: 'A hajat szokták festeni, de milyen színű a fa... famentes papír?',
    inputTipus: INPTIPUS.color,
    lista: []
  },
  {
    nev: 'Hajstílus',
    tipus: 'jellemzo',
    key:'hajstilus',
    megjegyzes: 'Az Árnyak között is fontos a jó megjelenés!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Félelem',
    tipus: 'jellemzo',
    key:'felelem',
    megjegyzes: 'Mindenki fél valamitől...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Ösztönző',
    tipus: 'jellemzo',
    key:'osztonzo',
    megjegyzes: 'De van, ami képes bátorítani!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Gyűlölet',
    tipus: 'jellemzo',
    key:'gyulolet',
    megjegyzes: 'Ne a gyűlölet vezéreljen...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Kedvenc',
    tipus: 'jellemzo',
    key:'kedvenc',
    megjegyzes: 'Hanem az, ami boldoggá tesz!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Írtózat',
    tipus: 'jellemzo',
    key:'irtozat',
    megjegyzes: 'Lehet, hogy valamitől kifordul a beled...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Vonzalom',
    tipus: 'jellemzo',
    key:'vonzalom',
    megjegyzes: 'De ennek te sem tudsz ellenállni!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Egyéb jellemzők, megjelenés',
    tipus: 'jellemzo',
    key:'megjelenes',
    megjegyzes: 'Szakáll, smink, tetkó, meg ami a többi helyre nem fér el :)',
    inputTipus: INPTIPUS.text,
  },
];