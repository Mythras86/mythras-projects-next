export interface IJellemzok {
  nev: string,
  key: string,
  tipus: string,
  megjegyzes: string,
  ertek?: string | number,
  egyseg?: string,
  lista?: Array<any>
}

export const TIPUS = {
  text: 'text',
  number: 'number',
  color: 'color',
  date: 'date',
  list: 'list',
  datalist: 'datalist'
} as const;

export const jellemzokData: Array<IJellemzok> = [
  {
    nev: 'Aktuális dátum',
    key:'aktualisDatum',
    megjegyzes: 'Szerinted a jelenlegi életviteleddel meddig jutsz?',
    tipus: TIPUS.date,
  },
  {
    nev: 'Becenév/nevek',
    key:'becenev',
    megjegyzes: 'Ahogy a haverok ismernek, már ha még élnek...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Álnév/nevek',
    key:'alnev',
    megjegyzes: 'Az alvilágban jobb, ha csak ezt ismerik...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Testsúly',
    key:'testsuly',
    megjegyzes: 'Szerinted lecsontozva mennyit ér a húsod?',
    tipus: TIPUS.number,
    egyseg: ' kg'
  },
  {
    nev: 'Magasság',
    key:'magassag',
    megjegyzes: 'Ettől függ, hogy hokedlinek, vagy toronynak becéznek.',
    tipus: TIPUS.number,
    egyseg: ' cm'
  },
  {
    nev: 'Kedvenc szín',
    key:'kedvencszin',
    megjegyzes: 'Mi a kedvenc színed? Barna? Nem, a kékááá...',
    tipus: TIPUS.color,
  },
  {
    nev: 'Testalkat',
    key:'testalkat',
    megjegyzes: 'Ki a mellet, be a hasat, hadd mártom meg benned a vasat!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Bőrszín',
    key:'borszin',
    megjegyzes: 'Hidd el, lassan már senkit nem érdekel, kivéve ha ember vagy.',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Szemszín',
    key:'szemszin',
    megjegyzes: 'Kék a szeme, arca csupa derű...',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Hajszín',
    key:'hajszin',
    megjegyzes: 'Milyet szeretnél? Van egyáltalán saját hajad?',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Szőrzet szín',
    key:'szorszin',
    megjegyzes: 'A hajat szokták festeni, de milyen színű a fa... famentes papír?',
    tipus: TIPUS.color,
    lista: []
  },
  {
    nev: 'Hajstílus',
    key:'hajstilus',
    megjegyzes: 'Az Árnyak között is fontos a jó megjelenés!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Félelem',
    key:'felelem',
    megjegyzes: 'Mindenki fél valamitől...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Ösztönző',
    key:'osztonzo',
    megjegyzes: 'De van, ami képes bátorítani!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Gyűlölet',
    key:'gyulolet',
    megjegyzes: 'Ne a gyűlölet vezéreljen...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Kedvenc',
    key:'kedvenc',
    megjegyzes: 'Hanem az, ami boldoggá tesz!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Írtózat',
    key:'irtozat',
    megjegyzes: 'Lehet, hogy valamitől kifordul a beled...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Vonzalom',
    key:'vonzalom',
    megjegyzes: 'De ennek te sem tudsz ellenállni!',
    tipus: TIPUS.text,
  },
  {
    nev: 'Egyéb jellemzők, megjelenés',
    key:'megjelenes',
    megjegyzes: 'Szakáll, smink, tetkó, meg ami a többi helyre nem fér el :)',
    tipus: TIPUS.text,
  },
];