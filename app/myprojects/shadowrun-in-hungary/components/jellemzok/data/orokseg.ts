import { dnsData } from "./dns";
import { IJellemzok, TIPUS } from "./jellemzok";

const dnsLista = dnsData.map(x=>x.dns);

export const oroksegData: Array<IJellemzok> = [
  {
    nev: 'DNS',
    key:'dns',
    megjegyzes:'Nem faj! Legfeljebb fajta te rasszista állat!',
    tipus: TIPUS.list,
    lista: dnsLista
  },
  {
    nev: 'Születési nem',
    key:'szuletesiNem',
    megjegyzes:'Nem? De! Vagy mit tudom én!?',
    tipus: TIPUS.text,
    lista: [
      'Nő',
      'Férfi',
      'Mindkettő',
      'Egyik sem'
    ]
  },
  {
    nev: 'Születési dátum',
    key:'szuletesiDatum',
    megjegyzes: 'Amikor megérkeztél ebbe a csodálatos sárgödörbe!',
    tipus: TIPUS.date,
  },
  {
    nev: 'Születési név',
    key:'szuletesiNev',
    megjegyzes: 'Amit a sírodra vésnek, ha kisimultak az intenzív vonalaid...',
    tipus: TIPUS.text,
  },
  {
    nev: 'Anyanyelv',
    key:'anyanyelv',
    megjegyzes:'Kezdj el csicseregni, de ha kitolod, levágjuk...',
    tipus: TIPUS.text,
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
];