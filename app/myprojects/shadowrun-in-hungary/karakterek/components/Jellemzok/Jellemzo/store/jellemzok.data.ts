import { INPTIPUS } from "../components/JellemzoInputok";
import { JellemzoModel } from "./jellemzo.model";
import { JellemzokDto } from "./jellemzok.dto";

const szorzetSzinek = [
  '#343434',
  '#583322',
  '#7f4432',
  '#714721',
  '#D3B27F',
  '#E4C795',
  '#FFEBC2',
];

type JellemzokModel<JellemzokDto> = {
  [key in keyof JellemzokDto]: JellemzoModel;
};

export const jellemzokData: JellemzokModel<JellemzokDto> = {
  becenev: {
    szoveg: 'Becenév/nevek',
    megjegyzesElo: 'Téged aztán ismernek páran, de a haveroknak csak...',
    inputTipus: INPTIPUS.text,
    ertek: '',
    megjegyzesUto: 'vagy. Már persze azoknak, akiket még nem nyelt el a sötét.',
  },
  alnev: {
    szoveg: 'Álnév/nevek',
    megjegyzesElo: 'Mert aki túl sokat mered a sötétbe, arra visszanéz és felfalja a lelkét. Ezért is jobb, ha az alvilág...',
    inputTipus: INPTIPUS.text,
    ertek: '',
    megjegyzesUto: 'néven ismer: minél kevesebb igazságot tudnak rólad, annál nehezebb sarokba szorítani!'
  },
  testsuly: {
    szoveg: 'Testsúly',
    megjegyzesElo: 'Szerinted lecsontozva mennyit ér a húsod?',
    inputTipus: INPTIPUS.number,
    ertek: 0,
    egyseg: ' kg'
  },
  magassag: {
    szoveg: 'Magasság',
    megjegyzesElo: 'Ettől függ, hogy hokedlinek, vagy toronynak becéznek.',
    inputTipus: INPTIPUS.number,
    ertek: 0,
    egyseg: ' cm'
  },
  kedvencSzin: {
    szoveg: 'Kedvenc szín',
    megjegyzesElo: 'Mi a kedvenc színed? Barna? Nem, a kékááá...',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  testalkat: {
    szoveg: 'Testalkat',
    megjegyzesElo: 'Ki a mellet, be a hasat, hadd mártom meg benned a vasat!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  borszin: {
    szoveg: 'Bőrszín',
    megjegyzesElo: 'Hidd el, lassan már senkit nem érdekel, kivéve ha ember vagy.',
    inputTipus: INPTIPUS.color,
    ertek: '',
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
  szemszin: {
    szoveg: 'Szemszín',
    megjegyzesElo: 'Kék a szeme, arca csupa derű...',
    inputTipus: INPTIPUS.color,
    ertek: '',
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
  hajszin: {
    szoveg: 'Hajszín',
    megjegyzesElo: 'Milyet szeretnél? Van egyáltalán saját hajad?',
    inputTipus: INPTIPUS.color,
    ertek: '',
    lista: szorzetSzinek
  },
  szorszin: {
    szoveg: 'Szőrzet szín',
    megjegyzesElo: 'A hajat szokták festeni, de milyen színű a fa... famentes papír?',
    inputTipus: INPTIPUS.color,
    ertek: '',
    lista: szorzetSzinek
  },
  hajstilus: {
    szoveg: 'Hajstílus',
    megjegyzesElo: 'Az Árnyak között is fontos a jó megjelenés!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  felelem: {
    szoveg: 'Félelem',
    megjegyzesElo: 'Mindenki fél valamitől...',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  osztonzo: {
    szoveg: 'Ösztönző',
    megjegyzesElo: 'De van, ami képes bátorítani!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  gyulolet: {
    szoveg: 'Gyűlölet',
    megjegyzesElo: 'Ne a gyűlölet vezéreljen...',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  kovetendo: {
    szoveg: 'Követendő példa',
    megjegyzesElo: 'Hanem az, ami boldoggá tesz!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  irtozat: {
    szoveg: 'Írtózat',
    megjegyzesElo: 'Lehet, hogy valamitől kifordul a beled...',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  vonzalom: {
    szoveg: 'Vonzalom',
    megjegyzesElo: 'De ennek te sem tudsz ellenállni!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  megjelenes: {
    szoveg: 'Egyéb jellemzők, megjelenés',
    megjegyzesElo: 'Szakáll, smink, tetkó, meg ami a többi helyre nem fér el :)',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
} as const;