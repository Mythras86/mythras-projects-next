import { IKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uresKarakter: IKarakter = {
  tulajdonosEamil: "",
  partik: [],
  sztorik: [],
  eletutak: [],
  verzio: 0,
  orokseg: {
    szuletesiNev: "",
    szuletesiNem: "",
    szuletesiDatum: "",
    dns: "",
    anyanyelv: "",
    kepessegek: []
  },
  jellemzok: {
    becenev: "",
    alnev: "",
    testalkat: "",
    hajstilus: "",
    szakall: "",
    latszolagosNem: "",
    eletkor: 0,
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
    vonzalom: ""
  },
  eroforrasok: {
    karmaAlap: 0,
    karmaKapott: 0,
    karmaFelhasznalt: 0,
    tokeAlap: 0,
    tokeKapott: 0,
    tokeFelhasznalt: 0,
    atvaltas: 0
  },
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
    kockatartalek: 0
  }
};

const karakterSlice = createSlice({
    name: 'shadowrunKarakter',
    initialState: uresKarakter,
    reducers: {
      karakterSzerkesztes(state, action: PayloadAction<{prop: string, subProp: string, ertek: any}>) {
        state['orokseg']['dns'] = action.payload.ertek;
        console.log(state)
      },
      resetKarakter: () => uresKarakter,
    }
});

export const karakterActions = karakterSlice.actions;
export default karakterSlice.reducer;