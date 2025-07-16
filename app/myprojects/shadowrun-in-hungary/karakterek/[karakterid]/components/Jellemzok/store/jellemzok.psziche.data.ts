import { INPTIPUS } from "../util/const-INPTIPUS";
import { JellemzoModel } from "./jellemzo.model";
import { PszicheDto } from "./jellemzok.psziche.dto";

type JellemzokModel<PszicheDto> = {
  [key in keyof PszicheDto
]: JellemzoModel;
};

export const pszicheData: JellemzokModel<PszicheDto> = {
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
} as const;