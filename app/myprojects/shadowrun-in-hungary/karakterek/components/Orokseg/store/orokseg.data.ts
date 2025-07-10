import { INPTIPUS } from "../../Jellemzok/Jellemzo/components/JellemzoInputok";
import { dnsData } from "../../Jellemzok/Jellemzo/store/dns.data";
import { JellemzoModel } from "../../Jellemzok/Jellemzo/store/jellemzo.model";
import { OroksegDto } from "./orokseg.dto";

type OroksegModel<OroksegDto> = {
  [key in keyof OroksegDto]: JellemzoModel;
};

const dnsLista = Object.entries(dnsData).map(x=>x[1].szoveg);

export const oroksegData: OroksegModel<OroksegDto> = {
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
    inputTipus: INPTIPUS.listWithText,
    ertek: '',
    lista: [
      'Leányka',
      'Fiúcska',
      'úristen, mindkettő?',
      'úristen, nemtelen?'
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
  }
} as const;