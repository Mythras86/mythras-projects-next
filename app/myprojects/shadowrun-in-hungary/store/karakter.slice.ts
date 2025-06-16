import { IKarakter } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const time = new Date()
const year = time.getUTCFullYear();
const month = time.getUTCMonth();
const day = time.getUTCDay();

const ujKarakter: IKarakter = {
  tulajdonosEmail: "",
  letrehozasEv: year,
  letrehozasHonap: month,
  letrehozasNap: day,
  partik: [],
  sztorik: [],
  eletutak: [],
  verzio: 0,
  szuletesiNev: "",
  szuletesiNem: "",
  szuletesiEv: 0,
  szuletesiHonap: 0,
  szuletesiNap: 0,
  dns: "",
  anyanyelv: "",
  kepessegek: [],
  becenev: "",
  alnev: "",
  testalkat: "",
  hajstilus: "",
  szakall: "",
  latszolagosNem: "",
  magassag: 0,
  testsuly: 0,
  szemszin: "",
  hajszin: "",
  szorszin: "",
  borszin: "",
  felelem: "",
  osztonzo: "",
  gyulolet: "",
  kedvenc: "",
  irtozat: "",
  vonzalom: "",
  karmaAlap: 1000,
  karmaKapott: 0,
  karmaFelhasznalt: 0,
  tokeAlap: 15000,
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
  kockatartalek: 0,
  eszkozok: [],
}


const karakterSlice = createSlice({
    name: 'shadowrunKarakter',
    initialState: ujKarakter,
    reducers: {
      karakterSzerkesztes(state: any, action: PayloadAction<{target: any, ertek: any}>) {
        state[action.payload.target] = action.payload.ertek;
      },
      resetKarakter: () => ujKarakter,
    }
});

export const karakterActions = karakterSlice.actions;
export default karakterSlice.reducer;