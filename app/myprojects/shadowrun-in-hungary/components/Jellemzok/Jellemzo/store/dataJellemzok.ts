import { INPTIPUS } from "../Jellemzo";
import { dnsData } from "./dataDns";

export interface IJellemzok {
  nev: string,
  tipus: string,
  key: string,
  inputTipus: string,
  megjegyzesElo: string,
  megjegyzesUto?: string,
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
    megjegyzesElo:'Na lássuk csak, ki is csöppent közénk ebbe a rusztikus sárgödörbe? Hát mik nem vannak, csak nem kis...',
    inputTipus: INPTIPUS.list,
    megjegyzesUto:'Hé te ott a balszélen! Fejezd be a pofázást meg a szemforgatást. Nem faj! Legfeljebb fajta te rasszista állat, hiszen mindannyian emberek vagyunk!',
    lista: dnsLista
  },
  {
    nev: 'Születési nem',
    tipus: 'orokseg',
    key:'szuletesiNem',
    megjegyzesElo:'Nem? De! Vagy mit tudom én!? Nézzünk be a lábacskái közé és kiderül. Ha jól látom, az új jövevény egy...',
    inputTipus: INPTIPUS.listWithText,
    lista: [
      'Leányka',
      'Fiúcska',
      'úristen, mindkettő?',
      'úristen, nemtelen?'
    ]
  },
  {
    nev: 'Születési dátum',
    tipus: 'orokseg',
    key:'szuletesiDatum',
    megjegyzesElo: 'Most, hogy a legfontosabbakkal megvagyunk, bevéssük a naptárba, hogy a mai napon,...',
    inputTipus: INPTIPUS.date,
    megjegyzesUto: '-n van a születésnapod!',
  },
  {
    nev: 'Születési név',
    tipus: 'orokseg',
    key:'szuletesiNev',
    megjegyzesElo: 'Valaki tudja már a csöppség nevét? Igen? Akkor beírom, hogy a neve...',
    inputTipus: INPTIPUS.text,
    megjegyzesUto: 'Ha túléli az elkövetkezendő éveket, azért lesz fontos, ha viszont kisimulnak az intenzív vonalai, akkor legalább lesz mit a sírkövére vésni.',
  },
  {
    nev: 'Anyanyelv',
    tipus: 'orokseg',
    key:'anyanyelv',
    megjegyzesElo:'Hé kisember, érted amit mondok? Ha igen, biztos...',
    inputTipus: INPTIPUS.listWithText,
    lista: [
      'Magyar',
      'Angol',
      'Francia',
      'Orosz',
      'Japán',
      'Kínai',
      'Indiai'
    ],
    megjegyzesUto: 'vagy. Na, kezdj el szépen cicseregni, mert ha nem beszélsz, kivágom a nyelved és a nyakadba kötöm!.'
  },
//jellemzők
  {
    nev: 'Becenév/nevek',
    tipus: 'jellemzo',
    key:'becenev',
    megjegyzesElo: 'Téged aztán ismernek páran, de a haveroknak csak...',
    inputTipus: INPTIPUS.text,
    megjegyzesUto: 'vagy. Már persze azoknak, akiket még nem nyelt el a sötét.'
  },
  {
    nev: 'Álnév/nevek',
    tipus: 'jellemzo',
    key:'alnev',
    megjegyzesElo: 'Mert aki túl sokat mered a sötétbe, arra visszanéz és felfalja a lelkét. Ezért is jobb, ha az alvilág...',
    inputTipus: INPTIPUS.text,
    megjegyzesUto: 'néven ismer: minél kevesebb igazságot tudnak rólad, annál nehezebb sarokba szorítani!'
  },
  {
    nev: 'Testsúly',
    tipus: 'jellemzo',
    key:'testsuly',
    megjegyzesElo: 'Szerinted lecsontozva mennyit ér a húsod?',
    inputTipus: INPTIPUS.number,
    egyseg: ' kg'
  },
  {
    nev: 'Magasság',
    tipus: 'jellemzo',
    key:'magassag',
    megjegyzesElo: 'Ettől függ, hogy hokedlinek, vagy toronynak becéznek.',
    inputTipus: INPTIPUS.number,
    egyseg: ' cm'
  },
  {
    nev: 'Kedvenc szín',
    tipus: 'jellemzo',
    key:'kedvencszin',
    megjegyzesElo: 'Mi a kedvenc színed? Barna? Nem, a kékááá...',
    inputTipus: INPTIPUS.color,
  },
  {
    nev: 'Testalkat',
    tipus: 'jellemzo',
    key:'testalkat',
    megjegyzesElo: 'Ki a mellet, be a hasat, hadd mártom meg benned a vasat!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Bőrszín',
    tipus: 'jellemzo',
    key:'borszin',
    megjegyzesElo: 'Hidd el, lassan már senkit nem érdekel, kivéve ha ember vagy.',
    inputTipus: INPTIPUS.color,
    lista: [
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
  },
  {
    nev: 'Szemszín',
    tipus: 'jellemzo',
    key:'szemszin',
    megjegyzesElo: 'Kék a szeme, arca csupa derű...',
    inputTipus: INPTIPUS.color,
    lista: [
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
      '#ff0000',
      '#e6ab37'
    ]
  },
  {
    nev: 'Hajszín',
    tipus: 'jellemzo',
    key:'hajszin',
    megjegyzesElo: 'Milyet szeretnél? Van egyáltalán saját hajad?',
    inputTipus: INPTIPUS.color,
    lista: [
      '#343434',
      '#E4C795',
      '#714721',
      '#583322',
      '#FFEBC2',
      '#D3B27F',
      '#7f4432',
    ]
  },
  {
    nev: 'Szőrzet szín',
    tipus: 'jellemzo',
    key:'szorszin',
    megjegyzesElo: 'A hajat szokták festeni, de milyen színű a fa... famentes papír?',
    inputTipus: INPTIPUS.color,
    lista: [
      '#343434',
      '#E4C795',
      '#714721',
      '#583322',
      '#FFEBC2',
      '#D3B27F',
      '#7f4432',
    ]
  },
  {
    nev: 'Hajstílus',
    tipus: 'jellemzo',
    key:'hajstilus',
    megjegyzesElo: 'Az Árnyak között is fontos a jó megjelenés!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Félelem',
    tipus: 'jellemzo',
    key:'felelem',
    megjegyzesElo: 'Mindenki fél valamitől...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Ösztönző',
    tipus: 'jellemzo',
    key:'osztonzo',
    megjegyzesElo: 'De van, ami képes bátorítani!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Gyűlölet',
    tipus: 'jellemzo',
    key:'gyulolet',
    megjegyzesElo: 'Ne a gyűlölet vezéreljen...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Kedvenc',
    tipus: 'jellemzo',
    key:'kedvenc',
    megjegyzesElo: 'Hanem az, ami boldoggá tesz!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Írtózat',
    tipus: 'jellemzo',
    key:'irtozat',
    megjegyzesElo: 'Lehet, hogy valamitől kifordul a beled...',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Vonzalom',
    tipus: 'jellemzo',
    key:'vonzalom',
    megjegyzesElo: 'De ennek te sem tudsz ellenállni!',
    inputTipus: INPTIPUS.text,
  },
  {
    nev: 'Egyéb jellemzők, megjelenés',
    tipus: 'jellemzo',
    key:'megjelenes',
    megjegyzesElo: 'Szakáll, smink, tetkó, meg ami a többi helyre nem fér el :)',
    inputTipus: INPTIPUS.text,
  },
];