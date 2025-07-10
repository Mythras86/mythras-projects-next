import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KarakterDto } from "./karakter.dto";

const ujKarakter: KarakterDto = {
  tulajdonosEmail: "",
  letrehozasDatum: "",
  partik: [],
  sztorik: [],
  eletutak: [],
  orokseg: {
    dns: '',
    szuletesiNem: '',
    szuletesiDatum: '',
    szuletesiNev: '',
    anyanyelv: '',
  },
  jellemzok: {
    becenev: '',
    alnev: '',
    testsuly: '',
    magassag: '',
    kedvencSzin: '',
    testalkat: '',
    borszin: '',
    szemszin: '',
    hajszin: '',
    szorszin: '',
    hajstilus: '',
    felelem: '',
    osztonzo: '',
    gyulolet: '',
    kovetendo: '',
    irtozat: '',
    vonzalom: '',
    megjelenes: '',
  },
  karmaAlap: 0,
  karmaKapott: 0,
  karmaFelhasznalt: 0,
  tokeAlap: 0,
  tokeKapott: 0,
  tokeFelhasznalt: 0,
  atvaltas: 0,
  tulajdonsagok: {
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
    pancel: 0
  },
  eszkozok: [],
}


const karakterSlice = createSlice({
    name: 'shadowrunKarakter',
    initialState: ujKarakter,
    reducers: {
      karakterSzerkesztes(state: any, action: PayloadAction<{target: string, targetKey: string, ertek: string | number}>) {
        state[action.payload.target][action.payload.targetKey] = action.payload.ertek;
      },
      resetKarakter: () => ujKarakter,
    }
});

export const karakterActions = karakterSlice.actions;
export default karakterSlice.reducer;