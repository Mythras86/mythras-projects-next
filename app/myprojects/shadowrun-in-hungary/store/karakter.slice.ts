import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KarakterDto } from "./karakter.dto";
import { asztralisData, fizikaiData, specialisData } from "../karakterek/[karakterid]/components/Tulajdonsagok/store/tulajdonsagok.data";

const datum = new Date();
const letrehozasDatum = datum.getFullYear()+'-'+datum.getMonth()+'-'+datum.getDay(); 

const ujKarakter: KarakterDto = {
  tulajdonosEmail: "dummy@email.com",
  letrehozasDatum: letrehozasDatum,
  partik: [],
  sztorik: [],
  eletutak: [],
  szuletesiDatum: '',
  szuletesiNev: '',
  anyanyelv: '',
  dns: "",
  szuletesiNem: "",
  becenev: '',
  alnev: '',
  testsuly: 0,
  magassag: 0,
  kedvencSzin: '',
  testalkat: '',
  borszin: '',
  szemszin: '',
  hajszin: '',
  szorszin: '',
  hajstilus: '',
  foglalkozas: '',
  felelem: '',
  osztonzo: '',
  gyulolet: '',
  kovetendo: '',
  irtozat: '',
  vonzalom: '',
  megjelenes: '',
  karmaAlap: 3000,
  karmaKapott: 0,
  karmaFelhasznalt: 0,
  tokeAlap: 1000000,
  tokeKapott: 0,
  tokeFelhasznalt: 0,
  atvaltas: 0,
  fizEro: fizikaiData.fizEro.min,
  fizGyo: fizikaiData.fizGyo.min,
  fizUgy: fizikaiData.fizUgy.min,
  fizAll: fizikaiData.fizAll.min,
  asztEro: asztralisData.asztEro.min,
  asztGyo: asztralisData.asztGyo.min,
  asztUgy: asztralisData.asztUgy.min,
  asztAll: asztralisData.asztAll.min,
  esszencia: specialisData.esszencia.min,
  magia: specialisData.magia.min,
  chi: specialisData.chi.min,
  rezonancia: specialisData.rezonancia.min,
  kockatartalek: specialisData.kockatartalek.min,
  pancel: specialisData.pancel.min,
  eszkozok: [],
}

const karakterSlice = createSlice({
    name: 'shadowrunKarakter',
    initialState: ujKarakter,
    reducers: {
      szerkesztes(state: any, action: PayloadAction<{targetKey: string, ertek: string | number}>) {
        state[action.payload.targetKey] = action.payload.ertek;
        return state;
      },
      betoltes(state: any, action: PayloadAction<KarakterDto>) {
        state = action.payload;
        return state;
      },
      resetKarakter: () => ujKarakter,
    }
});

export const karakterActions = karakterSlice.actions;
export default karakterSlice.reducer;