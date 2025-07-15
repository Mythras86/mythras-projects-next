import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KarakterDto } from "./karakter.dto";

const ujKarakter: KarakterDto = {
  tulajdonosEmail: "dummy@email.com",
  letrehozasDatum: "2025-01-01",
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
  karmaAlap: 0,
  karmaKapott: 0,
  karmaFelhasznalt: 0,
  tokeAlap: 0,
  tokeKapott: 0,
  tokeFelhasznalt: 0,
  atvaltas: 0,
  fizEro: 0,
  fizGyo: 0,
  fizUgy: 0,
  fizAll: 0,
  asztEro: 0,
  asztGyo: 0,
  asztUgy: 0,
  asztAll: 0,
  esszencia: 0,
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