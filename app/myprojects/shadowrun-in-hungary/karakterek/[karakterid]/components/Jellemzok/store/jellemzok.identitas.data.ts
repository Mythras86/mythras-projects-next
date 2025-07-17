import { INPTIPUS } from "../util/const-INPTIPUS";
import { JellemzokModel } from "./jellemzo.model";
import { IdentitasDto } from "./jellemzok.identitas.dto";

export const identitasData: JellemzokModel<IdentitasDto> = {
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
  hajstilus: {
    szoveg: 'Hajstílus',
    megjegyzesElo: 'Az Árnyak között is fontos a jó megjelenés!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  foglalkozas: {
    szoveg: 'Foglalkozás',
    megjegyzesElo: 'Mi volt az apja? Tüdőbeteg. Úgy értem mit csinált? Köhögött. De abból nem lehet megélni! Meg is halt szegény, ezért lett belőlem',
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