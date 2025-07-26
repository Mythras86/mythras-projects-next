import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KarakterDto } from "./karakter.dto";

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
  fizEro: 1,
  fizGyo: 1,
  fizUgy: 1,
  fizAll: 1,
  asztEro: 1,
  asztGyo: 1,
  asztUgy: 1,
  asztAll: 1,
  esszencia: 6,
  magia: 0,
  chi: 0,
  rezonancia: 0,
  kockatartalek: 0,
  pancel: 0,
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