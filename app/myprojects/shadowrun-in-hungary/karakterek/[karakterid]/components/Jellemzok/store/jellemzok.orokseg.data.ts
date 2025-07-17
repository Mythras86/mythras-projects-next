import { INPTIPUS } from "../util/const-INPTIPUS";
import { dnsData } from "./dns.data";
import { JellemzokModel } from "./jellemzo.model";
import { OroksegDto } from "./jellemzok.orokseg.dto";

const dnsLista = Object.entries(dnsData).map(x=>x[1].szoveg);

export const oroksegData: JellemzokModel<OroksegDto> = {
  // örökség
  dns: {
    szoveg: 'DNS',
    megjegyzesElo:'Na lássuk csak, ki is csöppent közénk ebbe a rusztikus sárgödörbe? Hát mik nem vannak, csak nem kis...',
    inputTipus: INPTIPUS.list,
    megjegyzesUto:'Hé te ott a balszélen! Fejezd be a pofázást meg a szemforgatást. Nem faj! Legfeljebb fajta te rasszista állat, hiszen mindannyian emberek vagyunk!',
    ertek: '',
    lista: dnsLista
  },
  szuletesiNem: {
    szoveg: 'Születési nem',
    megjegyzesElo:'Nem? De! Vagy mit tudom én!? Nézzünk be a lábacskái közé és kiderül. Ha jól látom, az új jövevény egy...',
    inputTipus: INPTIPUS.list,
    ertek: '',
    lista: [
      'Leányka!',
      'Fiúcska!',
      'Úristen, mindkettő?!',
      'Úristen, nemtelen?!'
    ]
  },
  szuletesiDatum: {
    szoveg: 'Születési dátum',
    megjegyzesElo: 'Most, hogy a legfontosabbakkal megvagyunk, bevéssük a naptárba, hogy a mai napon,...',
    inputTipus: INPTIPUS.date,
    ertek: '',
    megjegyzesUto: '-n van a születésnapod!',
  },
  szuletesiNev: {
    szoveg: 'Születési név',
    megjegyzesElo: 'Valaki tudja már a csöppség nevét? Igen? Akkor beírom, hogy a neve...',
    inputTipus: INPTIPUS.text,
    ertek: '',
    megjegyzesUto: 'Ha túléli az elkövetkezendő éveket, azért lesz fontos, ha viszont kisimulnak az intenzív vonalai, akkor legalább lesz mit a sírkövére vésni.',
  },
  anyanyelv: {
    szoveg: 'Anyanyelv',
    megjegyzesElo:'Hé kisember, érted amit mondok? Ha igen, biztos...',
    inputTipus: INPTIPUS.listWithText,
    ertek: '',
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
  borszin: {
    szoveg: 'Bőrszín',
    megjegyzesElo: 'Hidd el, lassan már senkit nem érdekel, kivéve ha ember vagy.',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  szemszin: {
    szoveg: 'Szemszín',
    megjegyzesElo: 'Kék a szeme, arca csupa derű...',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  hajszin: {
    szoveg: 'Hajszín',
    megjegyzesElo: 'Milyet szeretnél? Van egyáltalán saját hajad?',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  szorszin: {
    szoveg: 'Szőrzet szín',
    megjegyzesElo: 'A hajat szokták festeni, de milyen színű a fa... famentes papír?',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
} as const;