import { TulajdonsagModel, TulajdonsagokData } from "../../Tulajdonsagok/store/tulajdonsagokData";

export interface SzakertelemModel {
    tipus: string;
    nev: string;
    szint: number;
    kapcsoltTulSzint: number,
    kapcsoltTulNev: string,
    specs: [{
        nev: string;
        szint: number;
        kapcsoltTulSzint: number,
        kapcsoltTulNev: string,
    }]
}

export interface SzakertelmekModel {
    futas: SzakertelemModel;
}

export const SzakertelmekData = {
    futas: {
        tipus: 'Atlétika',
        nev: 'Futás',
        szint: 1,
        kapcsoltTulSzint: TulajdonsagokData.fizAll.szint,
        kapcsoltTulNev: TulajdonsagokData.fizAll.rovidites,
        specs: [
            {
                nev: 'távfutás',
                szint: 0,
                kapcsoltTulSzint: TulajdonsagokData.fizAll.szint,
                kapcsoltTulNev: TulajdonsagokData.fizAll.rovidites,
            },
            {
                nev: 'sprint',
                szint: 0,
                kapcsoltTulSzint: TulajdonsagokData.fizEro.szint,
                kapcsoltTulNev: TulajdonsagokData.fizEro.rovidites,
            },
            {
                nev: 'terepfutás',
                szint: 0,
                kapcsoltTulSzint: TulajdonsagokData.fizAll.szint,
                kapcsoltTulNev: TulajdonsagokData.fizAll.rovidites,
            },
        ]

    }

}

FIZIKAI
úszás KIT gyors ERO
távúszás KIT
merülés KIT
búvárkodás UGY könnyű KIT
nehéz KIT
ipari UGY
katonai UGY
mászás UGY hegymászás KIT
parkour ERO
jégmászás KIT
ugrás ERO magas ERO
távol ERO
esés UGY
inkognító UGY lopakodás UGY
álcázás UGY
szabadulás UGY
lopás UGY
zárnyitás UGY
gimnasztika UGY egyensúly UGY
flexibilitás UGY
kontroll ERO
vadonjárás INT túlélés INT
tájékozódás LOG
nyomkezelés INT


HARCI
pusztakezes harc UGY állóharc UGY
földharc UGY
harcművészet UGY
egykezes fegyverek UGY élesfegyverek UGY
tompafegyverek UGY
kábítófegyverek UGY
kiberfegyverek UGY
egzotikus fegyverek UGY
kétkezes fegyverek UGY élesfegyverek UGY
tompafegyverek UGY
kábítófegyverek UGY
szálfegyverek UGY
egzotikus fegyverek UGY
kézifegyverek UGY pisztolyok UGY
kábító pisztolyok UGY
sörétes pisztolyok UGY
tűzfegyverek UGY géppisztolyok UGY
puskák UGY
sörétes puskák UGY
mesterlövész p. UGY
nehézfegyverek UGY ágyúk LOG
rakétavetők LOG
gépfegyverek UGY
kézi lőfegyverek UGY íjak ERO
nyílpuskák UGY
fúvócsővek UGY
atlatl dárdák ERO
parittyák ERO
dobófegyverek UGY kések ERO
balták ERO
dárdák ERO
lándzsák ERO
dobócsillagok ERO

JÁRMŰVEZETÉS
földi járművek UGY motorok GYO
autók GYO
teherautók GYO
kamionok GYO
légi járművek UGY repülök GYO
helikopterek GYO
léghajók GYO
vizi járművek UGY kishajók GYO
nagyhajók LOG
légpárnások GYO
vitorlások UGY
víz alatti járművek UGY dízel tengeralattjárók LOG
atom tengeralattjárók LOG
kutató tengeralattjárók LOG
űrjárművek UGY rakéták LOG
űrrepülők LOG
felszínjárók LOG

MÁGIKUS
hermetikus tanok LOG varázsmondás LOG
rutiálék LOG
varázstörés LOG
sámáni tradíciók INT varázsmondás INT
rutiálék INT
varázstörés INT
chi áramlás AKA támadás AKA
védekezés AKA
varázstörés AKA
szellemidézés KAR idézés KAR
irányítás KAR
elűzés KAR
asztráljárás MAG auraolvasás MAG
projekció MAG
asztrális harc MAG
bájolások MAG alkímia LOG
varázsművesség LOG
semlegesítés LOG
technimancia RES összeállítás RES
szétbontás RES
regisztrálás RES

SZOCIÁLIS
etikett KAR céges KAR
katonai KAR
utcai KAR
befolyásolás KAR tárgyalás KAR
megfélelmítés KAR
vezetés KAR
vallatás KAR
tanítás KAR
megtévesztés KAR szinészet INT
álöltözet KAR
megszemélyesítés KAR

TUDOMÁNYOS
biotech LOG elsősegély LOG
kibertechnológia LOG
biotechnológia LOG
gyógyszerészet LOG
mérgek LOG
elektronika LOG számítógép LOG
szoftver LOG
hardver LOG
programozás LOG
dekázás LOG kiberharc LOG
hekkelés LOG
elektronikai hadviselés LOG
MI vezérlés LOG
rigózás INT drónirányítás LOG
járműirányítás INT
fegyverirányítás UGY
mérnök LOG mechanika LOG
statika LOG
robbantás LOG
fegyver LOG
páncél LOG
légtechnika LOG
víztechnika LOG
vegyi LOG
Érzékelés INT vizuális INT
aura INT
környezet INT