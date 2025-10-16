import { INPTIPUS } from "../util/const-INPTIPUS";
import { JellemzokModel } from "./jellemzo.model";
import { IdentitasDto } from "./jellemzok.identitas.dto";

export const identitasData: JellemzokModel<IdentitasDto> = {
  foglalkozas: {
    szoveg: 'Foglalkozás',
    megjegyzesElo: 'Mi volt az apja? Tüdőbeteg. Úgy értem mit csinált? Köhögött. De abból nem lehet megélni! Meg is halt szegény, ezért lett belőlem egy...',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  masnevek: {
    szoveg: 'Becenév/Álnév',
    megjegyzesElo: 'Van az úgy, hogy másképp szólítanak a szüleid, a haverok és az üzlettársaid. Persze az is lehet, hogy mindenki ugyanúgy hív: gyere ide!',
    inputTipus: INPTIPUS.text,
    ertek: '',
    megjegyzesUto: 'vagy. Már persze azoknak, akiket még nem nyelt el a sötét.',
  },
  latszolagosNem: {
    szoveg: 'Látszólagos nem',
    megjegyzesElo: 'Pedig DE! Leírhatod, de senkit nem érdekel addig, amíg ágyba nem kerültöktöktök. Amúgy az ólomgolyónak mindegy, minek érzed magad, csak szólok!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  lathatoBorszin: {
    szoveg: 'Látható bőrszín',
    megjegyzesElo: 'Milyet szeretnél? Pöttyös? Csíkos? Fekete? Fehér? Igen? Nem? Ne aggódj, a bőrszín miatt mára már sokkal kevesebb atrocitás érhet, bezzeg a fajtád miatt...',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  lathatoSzemszin: {
    szoveg: 'Látható szemszín',
    megjegyzesElo: 'Legyen élethű? Vagy Terminátoros? Tankos romantikus? Akarsz bele célkeresztet? LÉZERSZEMET?',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  lathatoHajszin: {
    szoveg: 'Látható hajszín',
    megjegyzesElo: 'Látom most szabadultál a fodrásztól és ejha, nagyon jól nézel ki! Arra gondoltám már, hogyan tart a szín, ha csurom vér lesz?',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  lathatoSzorszin: {
    szoveg: 'Látható szőrzet színe',
    megjegyzesElo: 'Gondoltál már rá, hogy befesd a p... pofaszakállad? Most miért, nagyon divatos mostanában!!!',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  kedvencSzin: {
    szoveg: 'Kedvenc szín',
    megjegyzesElo: 'Ha egy híd előtt állsz és egy csúnya öreg emberke megkérdi: mi a kedvenc színed? Barna? Nem, a kékááá...',
    inputTipus: INPTIPUS.color,
    ertek: '',
  },
  testsuly: {
    szoveg: 'Testsúly',
    megjegyzesElo: 'Nyugodtan állj a mérlegre, egy trollt is simán elbír. Szerinted lecsontozva mennyit ér a húsod?',
    inputTipus: INPTIPUS.number,
    ertek: 0,
    egyseg: ' kg',
  },
  magassag: {
    szoveg: 'Magasság',
    megjegyzesElo: 'Ettől függ, földszinten szagolod a rothadó csatornaszagot, vagy fenn a magasban inhalálod a szmogot',
    inputTipus: INPTIPUS.number,
    ertek: 0,
    egyseg: ' cm',
  },
  testalkat: {
    szoveg: 'Testalkat',
    megjegyzesElo: 'Ki a mellet, be a hasat, hadd mártom meg benned a vasat!',
    inputTipus: INPTIPUS.text,
    ertek: '',
  },
  hajstilus: {
    szoveg: 'Hajstílus',
    megjegyzesElo: 'Az Árnyak között is fontos a jó megjelenés! Ha nincs belőve a séród, ne aggódj, majd Dzsimmi megmutatja, hogy kell!',
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